// Inspired by Dan Shiffman

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  ellipse(100, 200, 100);
  ellipse(300, 200, 100);
  ellipse(500, 200, 100);

  if (mouseX > 50) {
    if (mouseX < 150) {
      if (mouseY > 150) {
        if (mouseY < 250) {
          push();
          fill(255, 0, 0);
          ellipse(100, 200, 100);
          pop();
        }
      }
    }
  }

  if (mouseX > 250) {
    if (mouseX < 350) {
      if (mouseY > 150) {
        if (mouseY < 250) {
          push();
          fill(255, 150, 0);
          ellipse(300, 200, 100);
          pop();
        }
      }
    }
  }

  if (mouseX > 450) {
    if (mouseX < 550) {
      if (mouseY > 150) {
        if (mouseY < 250) {
          push();
          fill(0, 255, 0);
          ellipse(500, 200, 100);
          pop();
        }
      }
    }
  }
}
