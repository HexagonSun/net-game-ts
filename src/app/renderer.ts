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
            this.clear(this.board);
        }

        const boardFragment: DocumentFragment = document.createDocumentFragment();
        for (let i: number = 0; i < model.height; i++) {
            const row: HTMLElement = this.createRow();
            for (let j: number = 0; j < model.width; j++) {
                row.appendChild(this.createTile(model, i, j));
            }
            boardFragment.appendChild(row);
        }

        this.board.appendChild(boardFragment);
    }

    private readonly clear = (element: HTMLElement): void => {
        element.innerHTML = "";
    }

    private createTile(model: Board, x: number, y: number): HTMLElement {
        const tileModel: Tile = model.board[x][y];
        const tile: HTMLElement = document.createElement("div");
        tile.className = "tile";
        tile.setAttribute("data-x", `${x}`);
        tile.setAttribute("data-y", `${y}`);

        const svg: HTMLElement = document.createElement("img");
        svg.setAttribute("src", this.getIconName(tileModel));
        svg.className = this.getRotationClassName(tileModel);
        tile.appendChild(svg);

        return tile;
    }

    private readonly createRow = (): HTMLElement => {
        const row: HTMLElement = document.createElement("div");
        row.className = "row";

        return row;
    }

    private readonly getIconName = (tileModel: Tile): string => {
        switch (tileModel.shape) {
            case Shape.PIPE: return "pipe_inactive.svg";
            case Shape.T: return "t_inactive.svg";
            case Shape.CORNER:
            default:
                return "corner_inactive.svg" ;
        }
    }

    private readonly getRotationClassName = (tileModel: Tile): string => {
        switch (tileModel.rotation) {
            default:
            case Rotation.NORTH: return "rot0";
            case Rotation.EAST: return "rot90";
            case Rotation.SOUTH: return "rot180";
            case Rotation.WEST: return "rot270";
        }
    }

}
