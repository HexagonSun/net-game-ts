class DebugGenerator {

    public static createRandomBoard(size: number): Board {
        const rows: Array<Array<Tile>> = [];
        for (let i: number = 0; i < size; i++) {
            const row: Array<Tile> = [];
            for (let j: number = 0; j < size; j++) {

                row.push(new Tile(this.getRandomShape(), this.getRandomRotation()));
            }
            rows.push(row);
        }

        return new Board(rows);
    }

    private static readonly getRandomShape = (): Shape => DebugGenerator.getRandom(Shape);

    private static readonly getRandomRotation = (): Rotation => DebugGenerator.getRandom(Rotation);

    private static readonly getRandom = <T extends {}>(enumDefinition: T): number => {
        const half: number = 2;

        return Math.floor(Math.random() * Object.keys(enumDefinition).length / half);
    }

}
