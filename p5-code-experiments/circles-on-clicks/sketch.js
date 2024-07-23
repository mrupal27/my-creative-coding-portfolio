let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(700, 700);
  background(220, 100, 10);
}

function mousePressed() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  strokeWeight(10);
  stroke(0, 0, 220);
  fill(r, g, b);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 100);
}
