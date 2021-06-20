class Game{
    constructor(){
        this.board = new AtomChain();
        this.board.addAtom(new Atom(3)); 
        this.board.addAtom(new Atom(3));
        this.board.addAtom(new Atom(2));
        this.board.addAtom(new Atom(1));
        this.board.addAtom(new Atom(2));
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
        //NOTE: When a combination happens, i add the new items index as a plus to continue the pattern (TODO: catch this and change the score of the atoms);
        //check that there is a plus in this board
        let pluses = this.board.contains("p");
        while (pluses.length !== 0){
            for (let i = 0; i < pluses.length; i++){
                pluses[i] = this.board.indexCleaner(pluses[i]);
            }
            console.log(pluses);
            console.table(this.board.atoms);
            //check for two atoms on either side of all pluses
            if (this.board.checkEitherSide(pluses[pluses.length - 1])){
                console.log("VALID ON EITHER SIDE");
                let addNum = this.board.atomAt(pluses[pluses.length -1]-1);
                //remove the three, add the merged one
                this.board.atoms.splice(this.board.indexCleaner(pluses[pluses.length - 1] - 1), 1);
                this.board.atoms.splice(this.board.indexCleaner(pluses[pluses.length - 1] - 1), 1);
                this.board.atoms.splice(this.board.indexCleaner(pluses[pluses.length - 1] - 1), 1, new Atom(addNum+1));
                pluses.splice(0, 0, this.board.indexCleaner(pluses[pluses.length - 1] - 1)); // add new atom created as a fake plus
            } 
            
            pluses.splice(pluses.length -1, 1);
            //delete the plus already parsed
        }
    }
}