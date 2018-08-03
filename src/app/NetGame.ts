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
        this.buildBoard();
    }

    private buildBoard(): void {
        const board: HTMLElement = this.getBoard();
        const boardSize: number = 10;
        const boardModel: Board = new Board(boardSize);
        this.console.log("board model:", boardModel);
    }

    private getBoard(): HTMLElement {
        return this.document.getElementById(NetGame.BOARD_ID);
    }
}
