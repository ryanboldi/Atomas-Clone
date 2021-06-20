let currentGame;

function setup(){
    createCanvas(800, 800);
    stroke(0);

    currentGame = new Game();

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
    currentGame.display();
    
   //currentGame.getIndexFromMousePosition();
}

function keyPressed(){
   
}

function mousePressed(){
    currentGame.place();
    currentGame.checkBoard();
}