let kitten;
let x = 0;

function preload() {
  kitten = loadImage('kitten2.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(kitten, x, 0, mouseX, mouseY);
  x++;
}