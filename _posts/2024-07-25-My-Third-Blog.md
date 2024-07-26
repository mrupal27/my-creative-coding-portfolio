---
Title: "My Third Blog - Selection Based"
Date: 2024-07-25
---
# This is my blog for my experiments that utilise case selections such as if statements in p5.js.

## Here is the program that made me want to work with selection statements, a random house generator program from Dan Shiffman's p5 tutorial on the random function.

Here is the following code:
``` // Introduction to Conditional Statements
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
// https://youtu.be/1Osb_iGDdjk
// https://editor.p5js.org/codingtrain/sketches/z_yjYIha

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300) {
    fill(255, 0, 200);
  }

  ellipse(300, 200, 100, 100);
}
```
You can try this unfilled to pink circle here [starting point](/my-creative-coding-portfolio/p5-code-experiments/conditional-statements-starting-point/index.html)

This simple code just turns a hollow/transparent unfilled circle into a pink one when the mouse moves halfway horizontally across the canvas.

I wish to create a program that fills this circle when hovering over it and also potentially adding multiple circles to it at some point in this blog post.

## This is my first experiment, in which I adapt the transparent to pink circle where it activates upon hover for 3 different circles.

As I believed I had a firm grasp on how the conditional statements worked in p5, I jumped straight into adapting the Shiffman starting point with the unfilled to pink circle.

I first added 3 circles at different positions:

```
  ellipse(100, 200, 100);
  ellipse(300, 200, 100);
  ellipse(500, 200, 100);
```
Then I added nested if statements (I did not yet know of more efficient ways to create this hover effect, such as maybe translating the origin to the centre and using x^2 + y ^ 2 = r^2 for circles.)

```
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
```

It is worth noting the use of the push and pop before setting the colour and redrawing the circle. As my circles are not moving, redrawing them in the same position is an easy solution to changing their colour and pushing and popping means that they only happen for that specific condition and not outside.

I chose the colours red, orange and green as I believe this program could be used to represent something like traffic lights.

You can try this traffic lights hover experiment [code experiment](/my-creative-coding-portfolio/p5-code-experiments/hover-traffic-lights/index.html)

## This is my second experiment, which shows a colour trail which changes shape based on which quadrant of the screen it is in, circles in the top left, triangles in the top right, squares in the bottom left, and 3/4 circle chords in the bottom right.

After creating the first few circle trails in my first blog and still trying to find a way to achieve the right colours for my fourth experiment in the first blog post, I begun to integrate my newly learned selection statements technique into a colour trail program and created positional divisions for 4 different shape types.

```
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

  ```

  Setting the co-ordinates for the triangle was 10  pixels away from the mouse position for all 3 vertices to create an equilateral triangle. 

  As the canvas was 800 pixels wide, I split mouseX by >400 and <400. As the canvas was also 600 pixels high, I split mouseY into >300 and < 300 and nested each of these 4 cases and put different shapes of around the same size.

  The color scheme was based on mouseX and mouseY as I was in the middle of colour trails and was learning the map function when I decided to add in some conditional statements.

![This is a colour trail which changes shape based on the position, courtesy of if statement selection](/my-creative-coding-portfolio/images/colour-trail-shape-change.png)

You can try this shape changing colour trail here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/colour-trail-shape-change/index.html)


## This is my third experiment, which is a colour trail which changes colour and shape every time the mouse is held down, courtesy of if statements.

After the success of my previous experiment, adding selection to a circle trail, I wanted to see if I could progress an example by Dan Shiffman where every time the mouse is pressed, the size and colour of a circle changes randomly. 

Here is the original code:

```
// The random() Function (Painting Exercise 1)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/beginners/p5js/2.4-random.html
// https://youtu.be/POn4cZ0jL-o

// Random Square Design: https://editor.p5js.org/codingtrain/sketches/Sl8ml_Lz8
// Random House Exercise: https://editor.p5js.org/codingtrain/sketches/HGq_S0Z5H
// Random Points: https://editor.p5js.org/codingtrain/sketches/h7hFqoV6H
// Painting Exercise 1: https://editor.p5js.org/codingtrain/sketches/stERy5a1D
// Painting Exercise 2: https://editor.p5js.org/codingtrain/sketches/IyyJ1QYKh

let r = 255;
let g = 255;
let b = 255;
let diameter = 32;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(r, g, b, 100);
  circle(mouseX, mouseY, diameter);
}

function mousePressed() {
  // background(0);
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
  diameter = random(16, 64);
}

```

You can try this random sized colour trail [starting point](/my-creative-coding-portfolio/p5-code-experiments/random-colour-trail-starting-point/index.html)

I decided I could use selection statements to also add the changing of shapes.

I added this selection block:

```
  if (shape == 0) {
    circle(mouseX, mouseY, diameter);
  } else if (shape == 1) {
    square(mouseX, mouseY, diameter);
  } else if (shape == 2) {
    triangle(
      mouseX,
      mouseY - diameter / 2,
      mouseX + diameter / 2,
      mouseY + diameter / 2,
      mouseX - diameter / 2,
      mouseY + diameter / 2
    );
  } else if (shape == 3) {
    circle(mouseX, mouseY, diameter); //double circle to make circle more likely
  }
```

I added this code before:

```
shape = floor(random(3));
```

This means shape is either: 0, 1, 2 or 3. 

I added 3 shapes to make it less complex but I had 4 numbers so that circles would be more likely to be selected.

It is also worth noting that I have my data that randomises my variables under this line (instead of under the mousepressed function):

```
  if (mouseIsPressed) { //same as if (mouseisPressed == True)
```

This allows for the user to see the colour and shape changing at the fast rate in front of them, meaning they can likely get the one they want, especially if they were to slow down the frame rate.

From this, all sorts of designs could be made, as it is like picking a random pen until you have one you want.

You can see a result of the use of this colour trail here: 

You can try this random colour and shape trail experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/colour-trail-random-shape/index.html)
