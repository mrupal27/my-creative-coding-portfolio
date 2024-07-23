---
Title: "My Second Blog - Random Function"
Date: 2024-07-23
---

# This is my blog for my experiments that utilise the random function in p5.js

## This is my first experiment, which shows circles with a diameter of 100 pixels that get placed on a screen with a different colour each time as the red, green and blue values are set to random.)


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

