class Renderer {

    private readonly board: HTMLElement;

    public constructor(board: HTMLElement) {
        this.board = board;
    }

    public render(model: Board): void {
        this.checkInitialization(model);
    }

    private checkInitialization(model: Board): void {
        if (this.board.childElementCount > 0) {
            return;
        }

        const boardFragment: DocumentFragment = document.createDocumentFragment();
        for (let i: number = 0; i < model.height; i++) {
            const row: HTMLElement = this.createRow();
            for (let j: number = 0; j < model.width; j++) {
                row.appendChild(this.createTile(model.board[i][j]));
            }
            boardFragment.appendChild(row);
        }

        this.board.appendChild(boardFragment);
    }

    private createTile(tileModel: Tile): HTMLElement {
        const tile: HTMLElement = document.createElement("div");

        tile.className = "tile";
        tile.innerText = this.getText(tileModel);

        console.log(this.board.childElementCount);

        return tile;
    }

    private readonly createRow = (): HTMLElement => {
        const row: HTMLElement = document.createElement("div");
        row.className = "row";

        return row;
    }

    private readonly getText = (tileModel: Tile): string => {
        switch (tileModel.shape) {
            case Shape.PIPE: return "|";
            case Shape.T: return "T";
            case Shape.CORNER:
            default:
                return "L" ;
        }
    }
}
