//Inspired by Dan Shiffman
let redValue = 0;
let greenValue = 0;

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  noStroke() //can put at beginning if you want it to apply to all
  if (mouseIsPressed) {
    //only if the mouse is pressed (works as a while as function draw() is working continuously)
    frameRate(10000);
    redValue= map(mouseX, 0, 800, 0, 255);
    greenValue = map(mouseY, 0, 600, 255, 0); //uninvert this and waffle
    fill(redValue, greenValue, mouseX);
    if (mouseX > 400) {
      if (mouseY < 300) {
        triangle(
          mouseX,
          mouseY - 10,
          mouseX + 10,
          mouseY + 10,
          mouseX - 10,
          mouseY + 10
        );
      } else if (mouseY > 300) {
        arc(mouseX, mouseY, 24, 24, 0, PI + HALF_PI, CHORD); // Pi + half pi gives us 3/4 of a circle as 1.5pi out of 2pi (2pi represents a full 360 degrees) so we get the pac man type circle with PIE mode which is the default but CHORD draws from the bottom left to the top right.
      }
    } else if (mouseX < 400) {
      if (mouseY < 300) {
        circle(mouseX, mouseY, 24);
      } else if (mouseY > 300) {
        square(mouseX, mouseY, 24);
      }
    }
  } //one brace for if mouse is pressed
} //one brace for draw function

