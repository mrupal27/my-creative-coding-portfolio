let iron;
let ellipseSize;
let lineWidth;

function preload() {
  iron = loadImage("iron.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

}

function draw() {
  background(100,200,255);
  
  lineWidth = random(20, 50);
  ellipseSize = random(20, 30);
  

  image(iron, -124, -59, 150 , 200); // Draw the image at the center

  
  //Red and Yellow Pulse:


  translate(0, 0, mouseY / 1.4); //translate has to come first here
  fill(255, 200, 0);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(255, 0, 0, 38);
  fill(255, 170, 0, 160);
  ellipse(-100, 0, ellipseSize);

}
