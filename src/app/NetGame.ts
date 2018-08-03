/**
 * Main entry point to <i>Net Game</i>
 */
class NetGame {

    private static readonly BOARD_ID: string = "board";

    private readonly document: Document;
    private readonly console: Console;

    public constructor(document: Document,
                       console: Console) {
        this.document = document;
        this.console = console;
    }

    /**
     * Bootstrap game.
     */
    public init(): void {
        this.console.log("Initializing NetGame");
        const board: Board = this.buildBoard();
        const renderer: Renderer = this.createRenderer();
        renderer.render(board);
    }

    private buildBoard(): Board {
        const boardSize: number = 10;
        const boardModel: Board = new Board(boardSize);
        this.console.log("board model:", boardModel);

        return boardModel;
    }

    private createRenderer(): Renderer {
        const board: HTMLElement = this.getBoard();

        return new Renderer(board);
    }

    private getBoard(): HTMLElement {
        return this.document.getElementById(NetGame.BOARD_ID);
    }
}
