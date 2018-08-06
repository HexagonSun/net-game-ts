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

        this.addSource(rows, size);

        return new Board(rows);
    }

    private static readonly getRandomShape = (): Shape => EnumUtils.getRandom(RotateableShape);

    private static readonly getRandomRotation = (): Rotation => EnumUtils.getRandom(Rotation);

    private static addSource(rows: Array<Array<Tile>>, size: number): void {
        const x: number = Math.floor(Math.random() * size);
        const y: number = Math.floor(Math.random() * size);
        rows[x][y] = new Source();
    }
}
