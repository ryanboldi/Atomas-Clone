class Atom {
    static numberNameBinds = {
        1: "H",
        2: "He",
        3: "Li",
        4: "Be",
        5: "B",
        6: "C",
        7: "N",
        8: "O",
        9: "F",
        10: "Ne",
        11: "Na",
        12: "Mg",
        13: "Al"
    };

    static numberColorBinds = {

    };


    constructor(num){
        this.number = num;
        this.name = Atom.numberNameBinds[this.number];
        this.color = Atom.numberColorBinds[this.number];
    }

    drawAt(x, y){};

    


}