class Neighbours {

    public readonly self: Tile;
    public readonly north: Tile;
    public readonly east: Tile;
    public readonly south: Tile;
    public readonly west: Tile;

    public constructor(rows: Array<Array<Tile>>, i: number, j: number) {
        this.self = rows[i][j];
        this.north = this.getNorth(rows, i, j);
        this.east = this.getEast(rows, i, j);
        this.south = this.getSouth(rows, i, j);
        this.west = this.getWest(rows, i, j);
    }

    public getAll(): Array<Tile> {
        return [ this.north, this.east, this.south, this.west ]
            .filter((t: Tile) => t !== undefined);
    }

    private readonly getNorth = (rows: Array<Array<Tile>>, i: number, j: number): Tile => {
        if (i <= 0) {
            return undefined;
        }

        return rows[i - 1][j];
    }

    private readonly getEast = (rows: Array<Array<Tile>>, i: number, j: number): Tile => {
        if (j >= rows[0].length - 1) {
            return undefined;
        }

        return rows[i][j + 1];
    }

    private readonly getSouth = (rows: Array<Array<Tile>>, i: number, j: number): Tile => {
        if (i >= rows.length - 1) {
            return undefined;
        }

        return rows[i + 1][j];
    }

    private readonly getWest = (rows: Array<Array<Tile>>, i: number, j: number): Tile => {
        if (j <= 0) {
            return undefined;
        }

        return rows[i][j - 1];
    }

}
