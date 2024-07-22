//Inspired by Dan Shiffman
function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    //only if the mouse is pressed (works as a while as function draw() is working continuously)
    frameRate(10000);
    noStroke();
    fill(mouseX, mouseX, mouseY); //only blue appears to be affected as red and green are always equal as they are both controlled by mouseX.
    circle(mouseX, mouseY, 24);
    circle(width - mouseX, height - mouseY, 24);
    circle(mouseX , height - mouseY, 24);
    circle(width - mouseX, mouseY, 24); //we produce 4 symmetrical trails.    
  }
}
