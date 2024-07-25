//Inspired By Dan Shiffman

let squareSize;
let lineWidth;
let r;
let g;
let b;

function setup() {
  createCanvas(400, 300);
  background(40);
}

function draw() {
  frameRate(10)
  lineWidth = random(4, 28);
  squareSize = random(5, 250);
  r = floor(random(2)) * 127;
  g = floor(random(2)) * 127;
  b = floor(random(2)) * 127;
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0);
  fill(r, g , b, 100);
  square(200, 150, squareSize);
}
