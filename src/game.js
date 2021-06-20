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
        // push();
        // stroke(120, 120, 120);
        // strokeWeight(3);
        // line(400, 400, mouseX, mouseY);
        // pop();
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
        return (floor(angle/TWO_PI * this.board.atoms.length));
    }

    place(){
        this.placeAt(this.getIndexFromMousePosition());
        this.next = new Atom(floor(random(1,5)));
    }
    /**
     * places the next atom at a certain position on the board
     * @param {Number} pos Position to place the next atom at
     */
    placeAt(pos){
        this.board.addAtom(this.next, pos);
    }

    //checks board and performs any updates
    checkBoard(){
        //check that there is a plus in this board
        let pluses = this.board.contains("p");
        if (pluses.length !== 0){
            //check for two atoms on either side of all pluses
            for (let i = 0; i < pluses.length; i++){
                if (this.board.atomAt(pluses[i]-1) == this.board.atomAt(pluses[i]+1)){
                    if (!(this.board.atomAt(pluses[i]-1) instanceof String)){
                        console.log("ADD");
                    }
                }
            }
        }
    }
}