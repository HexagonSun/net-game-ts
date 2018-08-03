/**
 * Main entry point to <i>Net Game</i>
 */
class NetGame {

    private static readonly BOARD_ID: string = "board";

    private readonly document: Document;
    private readonly console: Console;

    private renderer: Renderer;

    public constructor(document: Document,
                       console: Console) {
        this.document = document;
        this.console = console;
    }

    /**
     * Bootstrap game
     */
    public init(): void {
        this.console.log("Initializing NetGame");
        this.renderer = this.createRenderer();
        this.reset(this.renderer);

        this.registerHandlers();
    }

    private reset(renderer: Renderer): void {
        const board: Board = this.buildBoard();
        renderer.render(board);
    }

    private buildBoard(): Board {
        const boardSize: number = 10;
        const boardModel: Board = DebugGenerator.createRandomBoard(boardSize);
        this.console.log("board model:", boardModel);

        return boardModel;
    }

    private createRenderer(): Renderer {
        const board: HTMLElement = this.getBoard();

        return new Renderer(board);
    }

    private registerHandlers(): void {
        const button: HTMLElement = this.ge("generate");
        button.addEventListener("click", () => {
            console.log("Generate clicked!");
            this.reset(this.renderer);
        });
    }

    private getBoard(): HTMLElement {
        return this.ge(NetGame.BOARD_ID);
    }

    private ge(id: string): HTMLElement {
        return this.document.getElementById(id);
    }
}
