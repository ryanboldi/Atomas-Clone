class AtomChain{
    constructor(){
        this.atoms = [];
    };

    /**
     * Adds an atom to this atom chain at a given position
     * @param {Atom} atom Atom to be added to the chain
     * @param {Number} pos Position for the atom to be added 
     */
    addAtom(atom, pos){
        this.atoms.splice(pos, 0, atom);
    }

    display(){
        let len = this.atoms.length;
        let sep = TWO_PI/len;
        console.log(len);

        push();
        angleMode(RADIANS);
        let position = createVector(200,0);
        translate(400, 400);
        fill(255, 255, 0, 40);
        //ellipse(200, 0, 50, 50);
        for (let i = 0; i < len; i++){
            position.rotate(sep);
            this.atoms[i].drawAt(position.x, position.y);
        }
        pop();
    }

    getNextAtom(pos){

    }

    getPreviousAtom(pos){

    }
}