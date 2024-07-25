---
Title: "My First Blog - Circle Trails"
Date: 2024-05-02
---
# This is my blog for my experiments of circle trails in p5.js

## This is my first experiment, which shows circles on a screen which gradually change colour from one corner to another (black in the top left, white in the bottom right, pink in the top right and green in the bottom left.)

Here we can see as follows:

#White to black gradient.
<!--the spaces are important here as they prevent the image from formatting on to the same line as the information text-->

![This is a trail from the top left corner to the bottom right, producing a white to black gradient](/my-creative-coding-portfolio/images/white-to-black.png)

#Pink to green gradient.

![This is a trail from the bottom left corner to the top right, producing a green to pink gradient](/my-creative-coding-portfolio/images/green-to-pink.png)

#Both together.

![This is both trails white to black (top left corner to the bottom right) and green to pink (bottom left to top right) shown together](/my-creative-coding-portfolio/images/both-gradients.png)

From this first experiment alone, I learnt that the colour grey (or any neutral colour such as white or black)becomes very subordinate to bright hues (such as the pink and green here) as from the both gradients together photo, we can see the intersection in the centre of the canvass looks more pink and green than it actually is due to our brains rendering the neutral colours as less significant subconsciously. I also learnt that if 2 values of an rgb are equal then, the third colour which is different will be the only independent variable as we have on line 12:

```
fill(mouseX, mouseY, mouseX);
```
As our red and blue are controlled by mouseX, mouseY controlling our level of green is what produces a gradient of pink to green, with pink being maximum red and blue (controlled by mouseX) and 0 green and green being the obvious opposite with 0 red and blue and maximum green (controlled by mouseY).

You can try this pink to green and white to black circle trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-1/index.html)


## This is my second experiment, which shows that we can produce multiple colour trails (here there are four which are symmetrical as three identical trails are produced alongside the one that follows the mouse: one with the same X position but opposite Y position, one with the same Y position but opposite X position and one with opposite X and Y positions.)

I ended up with 2 images as follows:

#Image produced without removing mouse

![This is an image produced by the four trails without removing the mouse](/my-creative-coding-portfolio/images/quad-symmetry.png)

#Image produced with ability to lift mouse

![This is an image produced by four trails with the removal of the mouse throughout ](/my-creative-coding-portfolio/images/quad-symmetry-2.png)

From the first image produced without lifting the mouse (as I had the following function that resets the background upon clicking the mouse), I was astonished at the beautiful simple patterns that can be created with multiple trails producing symmetrical patterns with just the free flow of the hand, as doing this with a pen and paper is much more difficult. This made me begin to comprehend the power of p5. I then wondered what more I could do from here so I removed the reset function to gain more control over what the visual output would be.

Code function that resets black background on click:
```
function mousePressed() {
  background(0);
}
```
After adding this I was able to add more complex patterns that reminded me of squeezing a tub of paint and pausing to put dots and more concentrated colours where I would want them. As this program only had colours ranging from blue, white and yellow due to the use of mouseX and mouseY determining the colours, I used the mouse in different starting positions to get the colours I wanted in corners which they wouldn't go if only one trail was produced as mouseX and mouseY limited which colour could go where.

The heavy symmetry made me think that a modified version of this program could make some really beautiful flags as many flags are just simple lines so the use of other shapes that aren't just circles could help design a specific flag without much effort.

You can try this blue, white and yellow symmetrical trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-2/index.html)

## This is my third experiment which shows 2 colour trails of red, cyan blue and white, one which is a large circular trail and one which is a smaller square trail.)

After my second experiment, I thought about what I could change to make the trails produce something different, so I simplified the number from 4 to 2 but made the sizes and shapes difference, as can be seen here where I create a square:

```
square(width - mouseX, height -mouseY, 24);
```
The third parameter given is the size of the square (total area in pixels), this is smaller than our value for our circle.

```
circle(mouseX, mouseY, 50);
```
This large size difference creates a notable fracture in the perfect symmetry we had in an example like the second experiment but this is actually fine and even interesting as not all artists and designers are working for symmetrical creations. Changing this size value instantly makes our image destined to be less symmetrical but in this program, overlapping our two trails is another thing that causes less symmetry as we can't control both halves of the drawing and both trails have different shapes and sizes, so we get a wacky and somewhat symmetrical design shown in the below image.

![This is an image produced by the small square and large circle trails](/my-creative-coding-portfolio/images/circle-square-trail.png)

This experiment made me comfortable with the fact that the computer could end up doing good things for me without me intending that specific result.

You can try this red, blue and white circle and square trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-3/index.html)

## This is my fourth experiment, which shows one colour trail that produces an airy rainbow trail with the use of the map function and the creation of 2 variables to support this.)

Throughout creating my other trail experiments, I wanted to create a rainbow spectrum trail but thought I would have to learn to use a complex for loop to run through different colour combinations and loop back to the first colour like red but I was able to achieve something similar by still using mouseX and mouseY and the map function.

![This is the rainbow circle trail](/my-creative-coding-portfolio/images/rainbow-airy-trail.png)

My use of mouseX and mouseY is as follows: 

```
  redValue = map(mouseX, 0, 300, 0, 255);
  greenValue = map(mouseY, 0, 300, 255, 0);
```
The use of map allowed me to comfortably scale the colour change of 0 to 255 for my r and g values into the 300 pixel range for my canvas width and height, furthermore, I was also able to invert the scaling of the green value so it would decrease as we went down the canvas instead of increasing like it normally would such as in my other trails.

Having a set blue value of a 100, in the third parameter seen below, allowed me to control the other 2 colours so that the bottom left was a blue purple, as the red and green values were 0 due to the mapping (300 Y coordinate mapped to 0 (inverted mapping)and 0 X coordinate mapped to 0 (normal mapping)), the bottom right was a pinkish red (max red, 0 green) the top left was a yellow (max red and max green)(300 X and 0 Y)) and the top left was a green (max green, 0 red).

Making the blue value lower removed the bottom left purple-y blue colours and I can't explain exactly why as this was an accidental stumble but that was a reason I enjoyed this specific experiment.

The airiness came from the use of the alpha value, the lower this is the more misty and less concentrated the trails become, this is because the circles are created more transparently and become thicker if we stay on the same area for longer.

I created these 2 variables to be assigned to the result of my map function as it is one that returns a numerical value:

```
let redValue  = 0; 
let greenValue = 0;
```

You can try this rainbow colour trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-4/index.html)

 USE RANDOM LINE DRAWER UP LEFT RIGHT DOWN, 
 CREATE IMAGE IN 3D CIRCLE EXAMPLE WHICH THROWS THE CIRCLE THAT GOES IN AND OUT.
 RANDOM BLOG AND LOOP BLOG AND SELECTION BLOG



