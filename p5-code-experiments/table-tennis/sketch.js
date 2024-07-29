let tt;

function preload() {
  tt = loadImage("tt-bat.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(220);
  fill(255, 135, 0);
  
  let angle = map(mouseY, 0, height, 0, -PI); // Map mouseY to an angle in radians
  
  push(); // Start a new drawing state
  scale(-1, 1); // Flip the x-axis (makes sure that image gets horizontally flipped)

  
  rotate(angle); // Rotate by the calculated angle, has to come first so that anything after it is applied to by it.
  
  image(tt, 42, -40, 100 , 100); // Draw the image at the center
  pop(); // Restore the previous drawing state


  //Yellow Ball:

  push();
  translate(0, 0, mouseY / 1.4); //translate has to come first here
  fill(255, 200, 0);
  ellipse(-100, 0, 30);
  pop();
}
