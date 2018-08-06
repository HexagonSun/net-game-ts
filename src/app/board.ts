enum RotateableShape {
    PIPE, T, CORNER,
}

enum SystemShape {
    // The first three are given so that they overlap the definition/indexes of "RotateableShape"
    PIPE, T, CORNER,
    SOURCE_SINGLE, SOURCE_PIPE, SOURCE_T, SOURCE_CORNER,
}

type Shape = RotateableShape | SystemShape;

enum Rotation {
    NORTH, EAST, SOUTH, WEST,
}

class Tile {

    public readonly shape: Shape;
    public readonly rotation: Rotation;

    public connected: boolean = false;
    private neighbours: Neighbours;

    public constructor(shape: Shape, rotation: Rotation, neighbours?: Neighbours) {
        this.shape = shape;
        this.rotation = rotation;
        this.neighbours = neighbours;
    }

    public rotated(clockwise: boolean = true): Tile {
        const delta: number = clockwise ? 1 : -1;
        const idx: number = (this.rotation + delta) % EnumUtils.size(Rotation);
        const next: string = Rotation[idx];

        return new Tile(this.shape, Rotation[next] as Rotation, this.neighbours);
    }

    public setNeighbours(neighbours: Neighbours): void {
        this.neighbours = neighbours;
    }

}

class Source extends Tile {

    public constructor(shape: Shape, rotation: Rotation, neighbours?: Neighbours) {
        super(shape, rotation, neighbours);
        this.connected = true;
    }

    public rotated = (clockwise: boolean = true): Source => {
        const rotatedTile = super.rotated(clockwise);

        return new Source(rotatedTile.shape, rotatedTile.rotation, rotatedTile.neighbours);
    }

}

class Board {

    public readonly height: number;
    public readonly width: number;
    public readonly board: Array<Array<Tile>>;

    private source: Source;

    public constructor(rows: Array<Array<Tile>> = [], source: Source) {
        if (rows.length === 0 || rows[0].length === 0) {
            throw new Error("Invalid board dimensions");
        }
        this.board = rows;
        this.height = rows.length;
        this.width = rows[0].length;
        this.source = source;
    }

    public rotate(x: number, y: number, clockwise: boolean): void {
        this.board[x][y] = this.board[x][y].rotated(clockwise);
    }
}
