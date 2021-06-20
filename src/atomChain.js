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
    addAtom(atom, pos){
        this.atoms.splice(pos, 0, atom);
    }

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

    fillWithRandom(num){
        for (let i = 1; i < num+1; i++){
            this.addAtom(new Atom(i), 0);
        }
    }

    getNextAtom(pos){

    }

    getPreviousAtom(pos){

    }
}