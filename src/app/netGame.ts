/**
 * Main entry point to <i>Net Game</i>
 */
class NetGame {

    private static readonly BOARD_ID: string = "board";

    private readonly document: Document;
    private readonly console: Console;

    private renderer: Renderer;
    private events: Events;
    private board: Board;

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
        this.events = new Events();

        this.reset(this.renderer, this.events);

        this.registerHandlers();
    }

    private reset(renderer: Renderer, events: Events): void {
        this.board = this.buildBoard();
        this.updateAndDraw(renderer);
        events.setBoard(this.board);
    }

    private updateAndDraw(renderer: Renderer = this.renderer, board: Board = this.board): void {
        board.flood();
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
        this.registerBoardHandlers();
        this.registerFooterHandlers();
    }

    private readonly registerBoardHandlers = (): void => {
        const board: HTMLElement = this.getBoard();
        board.addEventListener("click", this.boardClick, false);
    }

    private readonly boardClick = (event: Event): void => {
        this.events.handleBoardClick(event);
        this.updateAndDraw(this.renderer);
    }

    private readonly registerFooterHandlers = (): void => {
        this.registerGenerate();
    }

    private registerGenerate(): void {
        const button: HTMLElement = this.ge("generate");
        button.addEventListener("click", () => {
            this.console.log("Generate clicked!");
            this.reset(this.renderer, this.events);
        });
    }

    private getBoard(): HTMLElement {
        return this.ge(NetGame.BOARD_ID);
    }

    private ge(id: string): HTMLElement {
        return this.document.getElementById(id);
    }
}
