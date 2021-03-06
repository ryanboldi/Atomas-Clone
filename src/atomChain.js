class AtomChain{
    static displayRad = 250;

    constructor(){
        this.atoms = [];
    };

    /**
     * Adds an atom to this atom chain at a given position
     * @param {Atom} atom Atom to be added to the chain
     * @param {Number} pos Position for the atom to be added 
     */
    addAtom(atom, pos = 0){
        this.atoms.splice(pos, 0, atom);
    }

    /**
     * Draws the atom chain to the screen
     */
    display(){
        let len = this.atoms.length;
        let sep = TWO_PI/len;

        push();
        fill(190, 190, 190, 100);
        stroke(160, 160, 160);
        strokeWeight(1);
        ellipse(400, 400, AtomChain.displayRad*2 + Atom.atomRad + 10,AtomChain.displayRad*2 + Atom.atomRad + 10);
        pop();

        push();
        angleMode(RADIANS);
        let position = createVector(AtomChain.displayRad, 0);
        translate(400, 400);
        fill(255, 255, 0, 40);
        for (let i = 0; i < len; i++){
            position.rotate(sep);
            this.atoms[i].drawAt(position.x, position.y);
        }
        pop();
    }

    /**
     * Fills the chain with a sequence of atoms (for testing only)
     * @param {Number} num number of atoms to add randomly to the chain
     */
    fillWithRandom(num){
        for (let i = 1; i < num+1; i++){
            this.addAtom(new Atom(i), 0);
        }
    }

    //returns the atom num at a certain position
    atomAt(ind){
        if (ind >= 0 && ind < this.atoms.length){
            return this.atoms[ind].number;
        } else if (ind < 0){
            return this.atomAt(ind + this.atoms.length)
        } else if (ind >= this.atoms.length){
            return this.atomAt(ind - this.atoms.length)
        }
    };

    indexCleaner(ind){
        if (ind >= 0 && ind < this.atoms.length){
            return ind;
        } else if (ind < 0){
            return this.indexCleaner(ind + this.atoms.length);
        } else if (ind >= this.atoms.length){
            return this.indexCleaner(ind - this.atoms.length);
        } 
    }

    removeAt(ind){
        this.atoms.splice(this.indexCleaner(ind), 1);
    }

    //returns if there is the same atom on either side of this index
    checkEitherSide(ind){
        if (this.atomAt(ind-1) == this.atomAt(ind+1)){
            if (!(this.atomAt(ind-1) instanceof String || typeof this.atomAt(ind-1) == 'string') && !(this.indexCleaner(ind-1) == this.indexCleaner(ind+1))){
                return true;
            }
            return false;
        }
        return false;
    }

    //much more efficient way to store and remember the hgihest and lowest element but i am lazy

    //returns the highest number element
    getHighest(){
        let max = 0;
        for(let i = 0; i < this.atoms.length; i++){
            if (this.atoms[i].number > max){
                max = this.atoms[i].number
            }
        }
        return max;
    }

    //returns the lowest number element
    getLowest(){
        let min = Infinity;
        for(let i = 0; i < this.atoms.length; i++){
            if (this.atoms[i].number < min){
                min = this.atoms[i].number
            }
        }
        return min;
    }

    //returns all occurances of the atom with id ID. else returns -1
    contains(ID){
        let occurances = [];
        for (let i = 0; i < this.atoms.length; i++){
            if (this.atoms[i].number == ID){
                occurances.push(i);
            }
        }
        return occurances;
    }
}