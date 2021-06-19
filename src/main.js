let a;

function setup(){
    createCanvas(800, 800);
    background(150, 150, 150);
    stroke(0);
    line(400, 0, 400, 800);
    line(0, 400, 800, 400);
    

    a = new Atom(10);
    console.log(a);
    a.drawAt(400, 400);
}

function draw(){

}