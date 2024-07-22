---
Title: "My First Blog - Circle Trails"
Date: 2024-05-02
---
## This is my blog for my experiments of circle trails in p5.js

# This is my first experiment, which shows circles on a screen which gradually change colour from one corner to another (black in the top left, white in the bottom right, pink in the top right and green in the bottom left.)

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

You can try this pink to green and white to black circle trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-1/index.html):


#This is my second experiment, which shows that we can produce multiple colour trails (here there are four which are symmetrical as three identical trails are produced alongside the one that follows the mouse: one with the same X position but opposite Y position, one with the same Y position but opposite X position and one with opposite X and Y positions.)

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

You can try this blue, white and yellow symmetrical trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circle-trail-2/index.html):


PUT SHAPE CHANGER ON NUMBER 4 USING FOR LOOP, DIFFERENT COLOURS FOR TRAILS ON NUMBER 2, talk about symmetrical uses for FLAGS IN NO2
 USE RANDOM LINE DRAWER UP LEFT RIGHT DOWN, 
 CREATE IMAGE IN 3D CIRCLE EXAMPLE WHICH THROWS THE CIRCLE THAT GOES IN AND OUT.

 THE OVERLAP IN EXAMPLE 3 MAKES US LOSE CONTROL OVER HOW MUCH SYMMETRY WE GET, MEANING WE CAN USE THIS TO GET TO SOMETHING AS SYMMETRICAL AS WE NEED


