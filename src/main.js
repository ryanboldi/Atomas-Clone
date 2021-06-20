let a;
let c;

let t = 0;

function setup(){
    createCanvas(800, 800);
    stroke(0);

    c = new AtomChain();
    
    let SHOW_GRIDLINES = false;
    if (SHOW_GRIDLINES){
        line(400, 0, 400, 800);
        line(0, 400, 800, 400);
    }

    let DISPLAY_ATOMS = false;
    if(DISPLAY_ATOMS){
        let a;
        for (let i = 100; i < 800; i += 100){
            a = new Atom(i/100);
            a.drawAt(i, 100);
        }
        for (let i = 100; i < 800; i += 100){
            a = new Atom(i/100 + 7);
            a.drawAt(i, 200);
        }
        for (let i = 100; i < 800; i += 100){
            a = new Atom(i/100 + 14);
            a.drawAt(i, 300);
        }
        for (let i = 100; i < 800; i += 100){
            a = new Atom(i/100 + 21);
            a.drawAt(i, 400);
        }
        for (let i = 100; i < 300; i += 100){
            a = new Atom(i/100 + 28);
            a.drawAt(i, 500);
        }
    }
    //c.fillWithRandom(18);
}

function draw(){
    background(230, 203, 193);
    c.display();
   
}

function keyPressed(){
    c.addAtom(new Atom("m"), 0);
    c.addAtom(new Atom("p"), 0);
    c.addAtom(new Atom(3), 0);
}