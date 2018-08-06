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
        const type: string = `${tileModel.connected ? "" : "in"}active.svg`;
        switch (tileModel.shape) {
            case RotateableShape.PIPE: return `pipe_${type}`;
            case RotateableShape.T: return `t_${type}`;
            case SystemShape.SOURCE_SINGLE: return `source_single_${type}`;
            case SystemShape.SOURCE_PIPE: return `source_pipe_${type}`;
            case SystemShape.SOURCE_T: return `source_t_${type}`;
            case SystemShape.SOURCE_CORNER: return `source_corner_${type}`;
            case RotateableShape.CORNER:
            default:
                return `corner_${type}`;
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
