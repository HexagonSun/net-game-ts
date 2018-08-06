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
        this.linkNeighbours(rows);

        return new Board(rows);
    }

    private static readonly getRandomShape = (): Shape => EnumUtils.getRandom(RotateableShape);

    private static readonly getRandomRotation = (): Rotation => EnumUtils.getRandom(Rotation);

    private static addSource(rows: Array<Array<Tile>>, size: number): Source {
        const x: number = Math.floor(Math.random() * size);
        const y: number = Math.floor(Math.random() * size);
        rows[x][y] = new Source(SystemShape.SOURCE_SINGLE, this.getRandomRotation());

        return rows[x][y];
    }

    private static linkNeighbours(rows: Array<Array<Tile>>): void {
        const height: number = rows.length;
        const width: number = rows[0].length;

        for (let i: number = 0; i < height; i++) {
            const row: Array<Tile> = rows[i];
            for (let j: number = 0; j < width; j++) {
                const tile: Tile = row[j];
                const neighbours: Neighbours = new Neighbours(rows, i, j);
                tile.setNeighbours(neighbours);
            }
        }
    }

}
