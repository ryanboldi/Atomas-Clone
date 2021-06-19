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
}