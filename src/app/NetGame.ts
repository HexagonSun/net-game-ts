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
     * bootstrap game.
     */
    public init(): void {
        this.console.log("Initializing NetGame");
        this.buildBoard();
    }

    private buildBoard(): void {
        const board: HTMLElement = this.getBoard();
        this.console.log("got board: ", board);
    }

    private getBoard(): HTMLElement {
        return this.document.getElementById(NetGame.BOARD_ID);
    }
}
