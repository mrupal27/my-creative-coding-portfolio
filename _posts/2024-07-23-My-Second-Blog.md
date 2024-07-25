---
Title: "My Second Blog - Random Function"
Date: 2024-07-23
---

# This is my blog for my experiments that utilise the random function in p5.js

## Here is the program that made me want to work with random, a random house generator program from Dan Shiffman's p5 tutorial on the random function.

Here is the following code:

```
// The random() Function (Random House Exercise)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.4-random.html
// https://youtu.be/POn4cZ0jL-o

// Random Square Design: https://editor.p5js.org/codingtrain/sketches/Sl8ml_Lz8
// Random House Exercise: https://editor.p5js.org/codingtrain/sketches/HGq_S0Z5H
// Random Points: https://editor.p5js.org/codingtrain/sketches/h7hFqoV6H
// Painting Exercise 1: https://editor.p5js.org/codingtrain/sketches/stERy5a1D
// Painting Exercise 2: https://editor.p5js.org/codingtrain/sketches/IyyJ1QYKh

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
  randomSeed(5);
}

function draw() {
  background(random(0, 50), random(0, 50), random(150, 255));
  rectMode(CORNER);
  fill(random(0, 50), random(150, 255), random(0, 50));
  rect(0, height / 2, width, height / 2);
  let x = width / 2;
  let y = height / 2;
  let w = random(150, 400);
  let r = random(0.2, 1);
  let h = w * r;
  let sw = random(2, 4);
  strokeWeight(sw);
  stroke(0);
  // House
  rectMode(CENTER);
  fill(random(100, 255), 0, random(100, 255));
  rect(x, y, w, w * r);
  // Roof
  let rh = random(h / 2 + 50, 200);
  fill(random(50, 255), random(0, 50), random(0, 50));
  triangle(x - w / 2, y - (w * r) / 2, x + w / 2, y - (w * r) / 2, x, y - rh);

  // Door
  let ww = random(10, h / 3);
  let wx = random(ww, w / 2 - ww);
  strokeWeight(2);
  stroke(0);
  fill(random(100, 255), random(100, 255), random(100, 255));
  rect(x - wx, y - (w * r) / 4, ww, ww);
  rect(x + wx, y - (w * r) / 4, ww, ww);
  line(x - wx, y - (w * r) / 4 - ww / 2, x - wx, y - (w * r) / 4 + ww / 2);
  line(x - wx - ww / 2, y - (w * r) / 4, x - wx + ww / 2, y - (w * r) / 4);
  line(x + wx, y - (w * r) / 4 - ww / 2, x + wx, y - (w * r) / 4 + ww / 2);
  line(x + wx - ww / 2, y - (w * r) / 4, x + wx + ww / 2, y - (w * r) / 4);

  noStroke();
  fill(random(100, 255), random(100, 255), random(100, 255));
  rect(x, y + h / 4, h / 4, h / 2 - sw * 2);
  fill(random(0, 50), random(0, 50), random(0, 50));
  circle(x - h / 24, y + h / 4, h / 12);

  // noLoop();
}

function mousePressed() {
  background(0);
}
```

You can try this house generator [starting point](/my-creative-coding-portfolio/p5-code-experiments/random-house-generator-startin-point/index.html)

I wish to create a program that does this random generation but for cars instead at some point in this blog post.



## This is my first experiment, which shows circles with a diameter of 100 pixels that get placed on a screen with a different colour each time as the red, green and blue values are set to random.


![See the circles produced with different random colours but of the same size](/my-creative-coding-portfolio/images/circles-on-clicks.png)

The cool thing about this is that you can click again on the same area to change the colour of the circle until you get one you like so any logo or image that could be designed using circles can be done using this simple program.

I chose to keep orange as the background as it is a relaxing colour with a bit of fun energy and a purple/blue stroke with a good thickness of 10 pixels to help the circles look like buttons or sweets such as skittles/smarties. 

Here you can see the code that creates the nice blue/purple stroke:

```
strokeWeight(10);
stroke(0, 0, 220);
```

The code for initialising the variables that become random:

```
let r = 0;
let g = 0;
let b = 0;
```

The code for randomising the variables value:

```
let r = 0;
let g = 0;
let b = 0;
```

The code that sets the colour of the circle using the 3 random numbers and the placement of the circle with the centre being where the mouse's position is.

```
  fill(r, g, b);
  ellipseMode(CENTER);
  ellipse(mouseX, mouseY, 100);
```
You can try this simple randomly coloured circles experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circles-on-clicks/index.html)

## This is my second experiment, which shows the generation of a randomly coloured and sized square with a randomly sized black outline, the use of this is that due to the relatively high frame rate (which I have reduced to 8), we can see the shapes of different sizes linger over each other, however the alpha value of the colour of our square is actually the value that apparently controls the speed of our animation, as the higher it is, the more transparent are older drawn squares are so they appear to stay for longer.

Use of random:

```
  lineWidth = random(4, 14);
  squareSize = random(5, 250);
  r = floor(random(2)) * 127;
  g = floor(random(2)) * 127;
  b = floor(random(2)) * 127;
```
My use of floor random * 127 here means I produce sharp colours from the rainbow or white or black (if floor is 0 or 2 for all 3) as the values for rainbow colours are 0, half or full for each respective RGB value as can be seen below:

![RGB rainbow colour values](/my-creative-coding-portfolio/images/rainbow_RGB.png)

The larger our random ranges are for lineWidth and squareSize, the more variation we get in our animation.

Although this was inspired by a Dan Shiffman Coding Train video on random functions, I have reached a point where this animation appears to resemble the work Vera Molnar did using squares which was brushed upon in the early weeks of the Creative Coding module.

![Resemblance to Vera Molnar's work can be seen here](/my-creative-coding-portfolio/images/vera-molnar-squares.png)

Try my random disco colours box experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/disco-box/index.html)

## This is my third experiment, which is a direct adaptation from the Dan Shiffman House generator starting point. As i gathered my skills from the use of random in the previous experiments, I broke down the house generator code to produce a random car generator.

My first thought was how I could use what was in front of me to change a house to a car. So i broke down what basic shapes I could use to make a cartoon looking car and I produced what looked like a burger with wheels in the paint app:

![Car Basic Shapes Image](/my-creative-coding-portfolio/images/car-basic-shapes.png)

After this I changed the roof triangle to and ellipse and after figuring out that Shiffman used a ratio between the height and width of the house and used these values for the sake of the roof too, I matched the ellipses centre to the centre of the 'house' as I was yet to change the house structure to the rectangle for the car. A lot of my measurement changes were trial and error as finding specific numbers was my intention due to time constraints and limited knowledge on other solutions.

```
arc(x - h / 4, y - h / 2, w - h / 2, h + w / 10, PI, TWO_PI); //third co-ordinate is the centre of the house subtract the height from the centre (half of house height)
```

To produce the car body, I just changed the number ranges for the houses structure as both shapes were rectangles:

```
let w = random(200, 300);
let r = random(0.3, 0.4); //ratio for the height of the house and windows
let h = w * r; //height is the width times ratio, never bigger, max is equal

```


AFter this I just had to add the wheels:

```
circle(x - w / 3, y + h / 2, wr * 2,); //larger circles with double size
circle(x + w / 3, y + h / 2, wr * 2);
  
circle(x + w / 3, y + h / 2, wr); //smaller circles
circle(x - w / 3, y + h / 2, wr);
```

The windows (also used lines like Shiffman's house windows):
```
//if you want to change colour of windows use stroke with push and pop
  
line(x - w / 2, y, x + w/2, y ); //windows bottom line
line(x + w / 3.1, y, x + w / 3.1, y - h / 2 ); //front window
line(x - w / 3, y, x - w / 3, y - h / 2 ); //rear window
```

And the exhaust pipe:

```
fill(50);
rect(x-w/1.79, y + h/3, 30,15); //exhaust pipe
```

Try my random car generator experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/random-car-generator/index.html)







