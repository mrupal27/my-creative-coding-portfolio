let gun;

function preload() {
  gun = loadImage("gun.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(0,180,55);
  fill(255, 135, 0);
  
  scale(-1, 1); // Flip the x-axis (makes sure that image gets horizontally flipped)
  
  image(gun, -126, -49, 200 , 150); // Draw the image at the center

  
  //Bullet:

  translate(-mouseY / 2.8, 0, 0); //translate has to come first here
  fill(255, 200, 0);
  rectMode(CENTER);
  strokeWeight(6);
  stroke(22); //grey center
  fill(30);
  ellipse(-100, 0, 15);

}
