//Inspired by Dan Shiffman
function setup() {
  createCanvas(255, 255);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    //only if the mouse is pressed (works as a while as function draw() is working continuously)
    frameRate(10000);
    noStroke();
    fill(mouseX, mouseY, mouseX);
    circle(mouseX, mouseY, 24);
  } //one brace for if mouse is pressed
} //one brace for draw function

function mousePressed() {
  //resets background when mouse is pressed
  background(0);
}
