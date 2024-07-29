---
Title: "My Fourth Blog - Images & Translation"
Date: 2024-07-27
---

# This is my blog for my experiments that import in images and make use of the translate feature to create dynamic animations in p5.js.

## Here is the program that set me off on how to use images, a kitten image from Dan Shiffman's p5 tutorial on adding images to the p5 web editor. I have reproduced the code and put links as Shiffman usually would as there is no direct sketch link in the video as of right now.

```
// Introduction to uploading media files
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/upload-editor
// https://www.youtube.com/watch?v=rO6M5hj0V-o

let kitten;
let x = 0;

function preload() {
  kitten = loadImage('kitten2.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(kitten, x, 0, mouseX, mouseY);
  x++;
}
```
Here we have a program that takes an image of a kitten, that was manually uploaded to the p5 web editor and uses the preload function to make sure that the image is loaded and ready before the program is ran, so that there is no delay before the image appears. The image() function makes sure that we can actually now see the image and takes the parameters of an image, then the co-ordinates of the top left of the image and then width and height we can give it (similar to the rect() function which draws a rectangle.)

In turn, we get the image of the kitten that starts at the top left of the screen and moves across to the right and disappears, as well as the image's width stretching out by the bottom right corner based on where our mouse is as we have used the mouseX and mouseY variables. 

You can try this moving kitten image here [starting point](/my-creative-coding-portfolio/p5-code-experiments/kitten-media-files-starting-point/index.html)


## This is my first experiment, which shows a gun firing a bullet and the mouseY variable controls the bullet moving backwards and forwards. 

```
  scale(-1, 1); // Flip the x-axis (makes sure that image gets horizontally flipped)
  
  image(gun, -126, -49, 200 , 150); // Draw the image at the center
```

I make use of the same preload and load functions to get the gun on to the screen. I then realised that I wanted the gun to be facing the right side of the screen, so I used the scale feature with parameters -1 and 1, -1 on the x axis means that it doesn't enlarge (due to the value 1 as 2 would double and 0.5 would halve it) but it inverts it due to the negative and 1 keeps the the y axis entirely the same.
I then draw the gun with co-ordinates -126 and -149 as this is the top left and I want the gun to be central, an alternative to this would be setting rectmode to CENTER. I set the size to 200 pixels across and 150 vertically.

The next code refers to the bullet

```
  //Yellow Ball:

  translate(-mouseY / 2.8, 0, 0); //translate has to come first here
  fill(255, 200, 0);
  rectMode(CENTER);
  strokeWeight(6);
  stroke(22);
  fill(30);
  ellipse(-100, 0, 15);

```

The main line here is the translate as the rest just draw the bullet at a starting point with a black outline and a grey center. I have given the translate function a first parameter of -mouseY/ 2.8, this is because when the user moves the mouse up and down, I wish for the bullet to move to the right, the negative is due to me having already scaled the canvas negatively for the sake of the gun, so this negative resets the original movement that would've been where the bullet moves right as the mouse moves down (mouseX and mouseY go up together), I divided by 2.8 to keep the bullet on the screen at the max mouseY possible, the other 2 parameters are 0 as I do not want the bullet to move up and down (Y axis) or in and out of the screen (Z axis).

I also realised that a circular motion of the mouse creates a visually pleasing slingshot type animation for the bullet as the normal movement is a bit fast.

You can try this gun shot experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/gun-shot/index.html)

## This is my second experiment, which shows a table tennis bat meeting a ball, when the mouse is at the highest point of the canvas.

I load the image in with the same functions and structure. But I realised instead of an image getting bigger, moving from side to side or up and down, I wanted to rotate this image of a table tennis bat to resemble the swing of a bat in real life. 

```
  let angle = map(mouseY, 0, height, 0, -PI ); // Map mouseY to an angle in radians
```

The addition of tis line with the following parameters (mouseY, 0, height), these 3 take all mouseY values from the range 0 to height as that is the whole vertical length of the screen and maps this range into 0 to -Pi radians, I used negative Pi to ake the bat rotate clockwise as the default was anticlockwise and I used Pi as it does a semi-circles worth as TWO_PI is a full circle which would be too much for a table tennis bat swing.

I also negatively scale the axis again for the sake of the bat facing the left side of the screen this time, an alternative to this could've been flipping the image before uploading it.

```
  push(); // Start a new drawing state
  scale(-1, 1); // Flip the x-axis (makes sure that image gets horizontally flipped)

  
  rotate(angle); // Rotate by the calculated angle, has to come first so that anything after it is applied to by it.
  
  image(tt, 42, -40, 100 , 100); // Draw the image at the center
  pop(); // Restore the previous drawing state
```

The rotate(angle) rotates what follows (which is our image with a height and width of 100 and positioned slightly left of the screen as positive 42 becomes negative due to our negative scale and slightly lower to make it feel central vertically) by the angle that we have already mapped. We surround this by a push and pop so that our yellow ball that follows doesn't rotate too.

```
  //Yellow Ball:

  push();
  translate(0, 0, mouseY / 1.4); //translate has to come first here
  fill(255, 200, 0);
  ellipse(-100, 0, 30);
  pop();
```

In my code for the yellow ball, I have a translate function with 0 for both X and Y as I want the ball to zoom as if it is being hit towards the user and out of the screen so I have mouseY/1.4 in the Z axis, this ratio keeps the ball on the screen and doesn't make it too big, the circle is positioned to match the middle of the bat, the values of -100 and 0 work as it is not the same size of the bat so, hence, doesn't also have values of 42 and -40.

The aforementioned circular motion works well at the top of the screen as it can represent an individual paddle bat with an invisible string or as if a hand was slowly moving itself to test the ball coming back.

You can try this table tennis experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/table-tennis/index.html)

## This is my third experiment, which shows Marvel character Iron Man firing a pulsating red and yellow beam out of the screen towards the user.

In this experiment, I built off of a previous experiment where I had randomly sized squares being drawn over each other to create animated disco colours.

I first changed the square behaviours to ellipse and altered the colours to only be a red stroke and a yellow ellipse. The ellipse range wasn't larger than the circles as I did not wish for it to be drawn over the red stroke/outline. I kept the stroke range to be somewhat high as I wanted the beam to be visible at the starting point (Iron Man's hand) and the pulsating effect to be visible and strong throughout. See below:

```
  lineWidth = random(20, 50);
  ellipseSize = random(20, 30);
```

The following code controls the drawing and movement of the pulse:

```
  //Red and Yellow Pulse:

  translate(0, 0, mouseY / 1.4); //translate has to come first here
  fill(255, 200, 0);
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(255, 0, 0, 38);
  fill(255, 170, 0, 160);
  ellipse(-100, 0, ellipseSize);
```
The translate feature works the same as my last experiment and comes out of the screen as it is controlled by the Z axis but not too far out thanks to the division of 1.4.

The alpha value of 38 makes sure that the red outline does not completely overtake the yellow core and the value of 160 makes sure that we get the effect of a red core(which isn't actually the case) followed by red and then yellow again.

You can try this iron man experiment here [code experiment](/my-creative-coding-portfolio/p5-code-experiments/iron-man/index.html)
