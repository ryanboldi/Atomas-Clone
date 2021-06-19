let a;

function setup(){
    createCanvas(800, 800);
    background(150, 150, 150);
    stroke(0);

    let SHOW_GRIDLINES = false;
    if (SHOW_GRIDLINES){
        line(400, 0, 400, 800);
        line(0, 400, 800, 400);
    }

    let DISPLAY_ATOMS = true;
    if(DISPLAY_ATOMS){
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
    }
}

function draw(){

}