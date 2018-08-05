enum Shape {
    PIPE, T, CORNER,
}

enum Rotation {
    NORTH, EAST, SOUTH, WEST,
}

class Tile {

    public readonly shape: Shape;
    public readonly rotation: Rotation;

    public constructor(shape: Shape, rotation: Rotation) {
        this.shape = shape;
        this.rotation = rotation;
    }

    public rotated(clockwise: boolean = true): Tile {
        const delta: number = clockwise ? 1 : -1;
        const idx: number = (this.rotation + delta) % EnumUtils.size(Rotation);
        const next: string = Rotation[idx];

        return new Tile(this.shape, Rotation[next] as Rotation);
    }

}

class Board {

    public readonly height: number;
    public readonly width: number;
    public readonly board: Array<Array<Tile>>;

    public constructor(rows: Array<Array<Tile>> = []) {
        if (rows.length === 0 || rows[0].length === 0) {
            throw new Error("Invalid board dimensions");
        }
        this.board = rows;
        this.height = rows.length;
        this.width = rows[0].length;
    }

    public rotate(x: number, y: number, clockwise: boolean): void {
        this.board[x][y] = this.board[x][y].rotated(clockwise);
    }
}
