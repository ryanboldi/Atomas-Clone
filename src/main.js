let a;

function setup(){
    createCanvas(800, 800);
    background(150, 150, 150);
    stroke(0);

    let c = new AtomChain();
    c.addAtom(new Atom(1), 0);
    c.addAtom(new Atom(2), 0);
    c.addAtom(new Atom(3), 0);
    c.addAtom(new Atom(4), 0);
    c.addAtom(new Atom(5), 0);
    c.display();


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
}

function draw(){

}