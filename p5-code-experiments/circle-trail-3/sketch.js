//Inspired by Dan Shiffman
function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
    if (mouseIsPressed){ //only if the mouse is pressed (works as a while as function draw() is working continuously)
  frameRate(10000);
  noStroke();
  fill(mouseY, mouseX, mouseX);
  circle(mouseX, mouseY, 50);
  square(width - mouseX, height -mouseY, 24);
}} //one brace for draw function and one for if mouse is pressed

