//Inspired by Dan Shiffman
let redValue  = 0; //initialisation not necessary but put as 0 for habit
let greenValue = 0;

function setup() {
  createCanvas(300, 300); //kept this to 300 as colour values are only affected to 255 for now
  background(0);
}

function draw() {
  frameRate(10000);
  noStroke();
  redValue = map(mouseX, 0, 300, 0, 255);
  greenValue = map(mouseY, 0, 300, 255, 0);
  fill(redValue, greenValue, 100, 90);
  circle(mouseX, mouseY, 24);
}


