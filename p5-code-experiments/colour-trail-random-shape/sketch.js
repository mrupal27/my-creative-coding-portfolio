// From Dan Shiffman
//Press mouse to change colour and size of circle

let r = 0;
let g = 0;
let b = 0;
let shape = 0;
let diameter = 32; //can define as variable at start even if not random to make less confusing having lot of numbers in big program.

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  rectMode(CENTER);

  if (mouseIsPressed) {
    r = random(100, 255);
    g = random(100, 255);
    b = random(100, 255);
    shape = floor(random(3));
    diameter = random(20, 36);
  }
  fill(r, g, b, 100);

  if (shape == 0) {
    circle(mouseX, mouseY, diameter);
  } else if (shape == 1) {
    square(mouseX, mouseY, diameter);
  } else if (shape == 2) {
    triangle(
      mouseX,
      mouseY - diameter / 2,
      mouseX + diameter / 2,
      mouseY + diameter / 2,
      mouseX - diameter / 2,
      mouseY + diameter / 2
    );
  } else if (shape == 3) {
    circle(mouseX, mouseY, diameter); //double circle to make circle more likely
  }
}
