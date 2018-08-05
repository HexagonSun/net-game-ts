class Events {

    private board: Board;

    public setBoard(board: Board): void {
        this.board = board;
    }

    public handleBoardClick(event: Event): boolean {
        const source: Element = event.srcElement;
        if (source.tagName !== "IMG" || !(event instanceof MouseEvent)) {
            return true;
        }

        const me: MouseEvent = event;
        const tileElement: HTMLElement = source.parentElement;
        const x: string = tileElement.getAttribute("data-x");
        const y: string = tileElement.getAttribute("data-y");

        console.log("click on tile element @ [", x, "|", y, "]");
        console.log("\tbutton:", me.button);

        this.board.rotate(Number(x), Number(y), true);

        return false;
    }
}
