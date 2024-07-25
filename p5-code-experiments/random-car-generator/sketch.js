// Inspired by Dan Shiffman

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  randomSeed(5);
}

function draw() {
  background(random(0, 50), random(0, 50), random(150, 255)); //blue sky
  rectMode(CORNER); //Needed as rectmode changes to center later and draw constantly loops
  fill(random(0, 50), random(150, 255), random(0, 50)); //green colour
  rect(0, height / 2, width, height / 2); //grass rectangle covers bottom half
  let x = width / 2; //centre x
  let y = height / 2; //centre y
  let w = random(200, 300);
  let r = random(0.3, 0.4); //ratio for the height of the house and windows
  let h = w * r; //height is the width times ratio, never bigger, max is equal
  let sw = random(2, 4); //thickness of roof and house edges

  strokeWeight(sw);
  stroke(0); //black edge
  // House
  rectMode(CENTER);
  fill(random(100, 255), 0, random(100, 255)); //pink to purple
  rect(x, y, w, h); //centred center for rectangle

  // Roof
  fill(random(50, 255), random(0, 50), random(0, 50)); //red to brown roofs

  arc(x - h / 4, y - h / 2, w - h / 2, h + w / 10, PI, TWO_PI); //second co-ordinate is the centre of the house subtract the height from the centre (half of house height)

  // Door
  let wr = random(10, h / 3); //wheel radius
  strokeWeight(2);
  stroke(0);
  fill(random(70, 150)); //greyish wheels
  
  circle(x - w / 3, y + h / 2, wr * 2); //larger circles
  circle(x + w / 3, y + h / 2, wr * 2);
  
  circle(x + w / 3, y + h / 2, wr); //smaller circles
  circle(x - w / 3, y + h / 2, wr);
  
  //if you want to change colour of windows use stroke with push and pop
  
  line(x - w / 2, y, x + w/2, y ); //windows bottom line
  line(x + w / 3.1, y, x + w / 3.1, y - h / 2 ); //front window
  line(x - w / 3, y, x - w / 3, y - h / 2 ); //rear window
  
  fill(50);
  rect(x-w/1.79, y + h/3, 30,15); //exhaust pipe

}

function mousePressed() {
  background(0);
}
