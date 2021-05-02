class Events {

    private board: Board;

    public setBoard(board: Board): void {
        this.board = board;
    }

    public handleBoardClick(event: Event): boolean {
        const target: EventTarget = event.target;
        if (!(event instanceof MouseEvent) || !(target instanceof HTMLImageElement)) { return false; }

        const me: MouseEvent = event;
        const tileElement: HTMLElement = target.parentElement;
        const x: string = tileElement.getAttribute("data-x");
        const y: string = tileElement.getAttribute("data-y");

        console.log("click on tile element @ [", x, "|", y, "]");
        console.log("\tbutton:", me.button);

        this.board.rotate(Number(x), Number(y), true);

        return false;
    }
}
