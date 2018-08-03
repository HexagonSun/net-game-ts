
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

}

class Board {

    public readonly height: number;
    public readonly width: number;
    public readonly board: Array<Array<Tile>>;

    public constructor(size: number) {
        const rows: Array<Array<Tile>> = [];
        for (let i: number = 0; i < size; i++) {
            const row: Array<Tile> = [];
            for (let j: number = 0; j < size; j++) {

                row.push(new Tile(this.getRandomShape(), this.getRandomRotation()));
            }
            rows.push(row);
        }
        this.board = rows;
        this.height = rows.length;
        this.width = rows[0].length;
    }

    private readonly getRandomShape = (): Shape => this.getRandom(Shape);

    private readonly getRandomRotation = (): Rotation => this.getRandom(Rotation);

    private readonly getRandom = <T extends {}>(enumDefinition: T): number => {
        const half: number = 2;

        return Math.floor(Math.random() * Object.keys(enumDefinition).length / half);
    }

}
