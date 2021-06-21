class Game{
    static constants = {
        plusProb : 0.3,
        minusProb : 0,
        generatorSd: 0.5,
    }

    constructor(){
        this.board = new AtomChain();
        // this.board.addAtom(new Atom(3)); 
        // this.board.addAtom(new Atom(3));
        // this.board.addAtom(new Atom(2));
        // this.board.addAtom(new Atom(1));
        // this.board.addAtom(new Atom(2));
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

        let rand = random();
        if(rand < Game.constants.plusProb){
            this.next = new Atom("p");
        } else if (rand < (Game.constants.plusProb + Game.constants.minusProb)){
            this.next = new Atom("m");
        } //others
        else {
            //random element
            //get the highest element on the board's value,
            let highest = this.board.getHighest();

            //get the lowest element on the board's value,
            let lowest = this.board.getLowest();

            //find the mid point
            let av = lowest + ceil((highest - lowest) /2);

            //add one to the mid point to bias to larger numbers
            //maybe the 'ceil'ing is enough to bias upwards and i don't need this
            //av++;

            //generate gaussian probability of generating a number
            let nextAtom = ceil(randomGaussian(av, Game.constants.generatorSd));
            if (nextAtom > 0){
                this.next = new Atom(nextAtom);
            } else {
                this.next = new Atom(1);
            }
        }
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
            //console.log(pluses);
            //console.table(this.board.atoms);
            
            //check for two atoms on either side of all pluses
            if (this.board.checkEitherSide(pluses[pluses.length - 1])){
                console.log("VALID ON EITHER SIDE");
                let addNum = this.board.atomAt(pluses[pluses.length -1]-1);

                //if the "plus" is not actually a plus, but an element
                if (this.board.atomAt(pluses[pluses.length - 1]) !== "p"){
                    let n1 = this.board.atomAt(pluses[pluses.length - 1]);
                    let n2 = addNum;

                    if (n2 > n1){
                        addNum = n2 + 1;
                    } else {
                        addNum = n1 + 1;
                    }
                } 
                
                //remove the three, add the merged one

                //add the three indexes that need to be removed to an array
                let toRemove = [this.board.indexCleaner(pluses[pluses.length - 1] + 1),
                            this.board.indexCleaner(pluses[pluses.length - 1]),
                            this.board.indexCleaner(pluses[pluses.length - 1] - 1)];

                //sort this array in decending order so the biggest index is first
                let sortedToRemove = reverse(sort(toRemove));
                
                //remove the elements in this order to not destroy anything
                for (let i = 0; i < sortedToRemove.length - 1; i++){
                    this.board.removeAt(sortedToRemove[i]);
                }

                //add the next element at the location of the last removal.
                console.log(addNum);
                this.board.atoms.splice(sortedToRemove[2], 1, new Atom(addNum+1));

                pluses.splice(0, 0, sortedToRemove[2]); // add new atom created as a fake plus

                //show the board intermediate
                this.display();
            } 
            
            pluses.pop();
            //delete the plus already parsed
        }
    }
}