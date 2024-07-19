---
Title: "My First Blog - Circle Trails"
Date: 2024-05-02
---
# This is my blog for my experiments of circle trails in p5.js

## This is my first experiment, which shows circles on a screen which gradually change colour from one corner to another (black in the top left, white in the bottom right, pink in the top right and green in the bottom left.)

Here we can see as follows:
White to black gradient.
<!--the spaces are important here as they prevent the image from formatting on to the same line as the information text-->

![This is a trail from the top left corner to the bottom right, producing a white to black gradient](/my-creative-coding-portfolio/images/white-to-black.png)

Pink to green gradient.

![This is a trail from the bottom left corner to the top right, producing a green to pink gradient](/my-creative-coding-portfolio/images/green-to-pink.png)

Both together.

![This is both trails white to black (top left corner to the bottom right) and green to pink (bottom left to top right) shown together](/my-creative-coding-portfolio/images/both-gradients.png)

From this first experiment alone, I learnt that the colour grey (or any neutral colour such as white or black)becomes very subordinate to bright hues (such as the pink and green here) as from the both gradients together photo, we can see the intersection in the centre of the canvass looks more pink and green than it actually is due to our brains rendering the neutral colours as less significant subconsciously. I also learnt that if 2 values of an rgb are equal then, the third colour which is different will be the only independent variable as we have on line 12:

```
fill(mouseX, mouseY, mouseX);
```
As our red and blue are controlled by mouseX, mouseY controlling our level of green is what produces a gradient of pink to green, with pink being maximum red and blue (controlled by mouseX) and 0 green and green being the obvious opposite with 0 red and blue and maximum green (controlled by mouseY).

You can try this pink to green and white to black circle trail experiment here: [code experiment](/my-creative-coding-portfolio/p5-code-experiments/circletrail1/index.html):


##This is my second experiment, which shows that we can produce multiple colour trails

PUT SHAPE CHANGER ON NUMBER 4  USING FOR LOOP, DIFFERENT COLOURS FOR TRAILS ON NUMBER 2, talk about symmetrical uses for flags in number 2


