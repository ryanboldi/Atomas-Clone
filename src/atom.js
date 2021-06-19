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

    static atomAlpha = 200;

    static numberColorBinds = {
        1: [0, 0, 255, Atom.atomAlpha],
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
        13: [128, 128, 128, this.atomAlpha],
        14: [],
        15: [],
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