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
        13: "Al",
        14: "Si",
        15: "P",
        16: "S",
        17: "Cl",
        18: "Ar",
        19: "K",
        20: "Ca",
        21: "Sc",
        22: "Ti",
        23: "V",
        24: "Cr",
        25: "Mn",
        26: "Fe",
        27: "Co",
        28: "Ni",
        29: "Cu",
        30: "Zn", 
    };

    static atomAlpha = 255;

    static numberColorBinds = {
        1: [106, 181, 255, Atom.atomAlpha],
        2: [239, 228, 176, Atom.atomAlpha],
        3: [128, 128, 192, Atom.atomAlpha],
        4: [240, 240, 240, Atom.atomAlpha],
        5: [128, 64, 0, Atom.atomAlpha],
        6: [85, 85, 85, Atom.atomAlpha],
        7: [0, 196, 196, Atom.atomAlpha],
        8: [128, 255, 0, Atom.atomAlpha],
        9: [253, 269, 66, Atom.atomAlpha],
        10: [255, 0, 128, Atom.atomAlpha],
        11: [255, 128, 64, Atom.atomAlpha],
        12: [128, 128, 255, Atom.atomAlpha],
        13: [128, 128, 128, Atom.atomAlpha],
        14: [0, 0, 160, Atom.atomAlpha],
        15: [254, 58, 1, Atom.atomAlpha],
        16: [0, 111, 164, Atom.atomAlpha],
        17: [152, 3, 252, Atom.atomAlpha],
        18: [176, 53, 202, Atom.atomAlpha],
        19: [0, 128, 0, Atom.atomAlpha],
        20: [255, 255, 255, Atom.atomAlpha],
        21: [1, 126, 104, Atom.atomAlpha],
        22: [92, 92, 92, Atom.atomAlpha],
        23: [0, 142, 210, Atom.atomAlpha],
        24: [190, 125, 255, Atom.atomAlpha],
        25: [227, 0, 0, Atom.atomAlpha],
        26: [197, 137, 137, Atom.atomAlpha],
        27: [17, 17, 255, Atom.atomAlpha],
        28: [156, 156, 78, Atom.atomAlpha],
        29: [205, 113, 29, Atom.atomAlpha],
        30: [211, 211, 211, Atom.atomAlpha],
    };

    static atomRad = 100;

    constructor(num) {
        this.number = num;
        this.name = Atom.numberNameBinds[this.number];
        this.color = Atom.numberColorBinds[this.number];
    }

    drawAt(x, y){
        //draws the actual atom
        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(x, y, Atom.atomRad, Atom.atomRad);
        
        //draws the text of the atom's name
        textAlign(CENTER, CENTER);
        stroke(0);
        fill(255);
        strokeWeight(2);
        textSize(32);
        text(this.name, x, y); 
        
        //draws the little number underneath the atom's name
        textSize(16);
        strokeWeight(1);
        stroke(255);
        fill(0,0,0,200);
        text(this.number, x, y+(Atom.atomRad/4)); 
        
        pop();
    };
}