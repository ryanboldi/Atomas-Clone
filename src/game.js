class Game{
    constructor(){
        this.board = new AtomChain();
        this.board.addAtom(new Atom(1));
        this.board.addAtom(new Atom(2));
        this.board.addAtom(new Atom(3)); 
        this.board.addAtom(new Atom("p"), 2);
        this.next = new Atom(floor(random(1,5)));
    }

    display(){
        background(230, 203, 193);
        this.board.display();
        this.next.drawAt(400,400);
    }

    /**
     * returns the index associated with the current mouse position
     */
    getIndexFromMousePosition(){
        let vecFromCenter = createVector(mouseX - 400, mouseY - 400);
        let angle = acos(createVector(1, 0).dot(vecFromCenter)/vecFromCenter.mag());
        if (vecFromCenter.y < 0){
            angle = TWO_PI - angle;
        }
        console.log(angle);
        //console.log(vecFromCenter.cross(createVector(1, 0)));
        line(400, 400, 400 + vecFromCenter.x, 400 + vecFromCenter.y);
    }

    /**
     * places the next atom at a certain position on the board
     * @param {Number} pos Position to place the next atom at
     */
    placeAt(pos){
        this.board.addAtom(this.next, pos);
    }
}