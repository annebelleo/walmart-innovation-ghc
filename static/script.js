var machine;
var theScreen;
var dispenser;
var receipt;
var waterBottle;
var waterBottleImg;

var x;
var y;

var bottleX1 = 35;
var bottleY1 = 350;
var bottleX2 = 35;
var bottleY2 = 320;
var bottleX3 = 235;
var bottleY3 = 350;
var bottleX4 = 235;
var bottleY4 = 320;

var dispenserX = 135;
var dispenserY = 250;

function preload() {
  // waterBottleImg = loadImage("bottle.png");  // idk why this doesn't work
}

function setup() {
  var canvasDiv = document.getElementById('p5Canvas')
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  // console.log(canvasDiv.offsetHeight)
  // console.log(height)
  // var myCanvas = createCanvas(width, height);
  let renderer = createCanvas(275, 400);
  // myCanvas.parent(canvasDiv);
  renderer.parent(canvasDiv);

  waterBottle = new Group();
  waterBottle1 = createSprite(bottleX1, bottleY1, 25, 50);
  waterBottle2 = createSprite(bottleX2, bottleY2, 10, 10);
  waterBottle3 = createSprite(bottleX3, bottleY3, 25, 50);
  waterBottle4 = createSprite(bottleX4, bottleY4, 10, 10)
  waterBottle.add(waterBottle1)
  waterBottle.add(waterBottle2)
  waterBottle.add(waterBottle3)
  waterBottle.add(waterBottle4)
}

function draw() {
  background(255, 255, 255);

  let blue = color(255, 204, 0);
  fill(blue);
  machine = rect(60, 75, 150, 300, 10); // x-axis, y-axis, width, height, border-radius
  let white = color(255, 255, 255)
  fill(white);
  theScreen = rect(85, 100, 100, 100, 10)
  let black = color(0, 0, 0)
  fill(black);
  receipt = rect(135, 300, 50, 10)
  let yellow = color(100, 100, 100)
  fill(yellow);
  dispenser = ellipse(dispenserX, dispenserY, 50); // x, y, diameter
  dispenser.shapeColor = 'white';

  machine.immovable = true;
  dispenser.immovable = true;

  for (var i = 0; i < waterBottle.length; i++) {
    waterBottle[i].shapeColor = 'lightblue';
  }

  waterBottle1.velocity.x = 1;
  waterBottle1.velocity.y = -1;
  waterBottle2.velocity.x = 1;
  waterBottle2.velocity.y = -1;

  if (waterBottle1.position.x == dispenserX) {
    waterBottle1.remove();
    waterBottle2.remove()
    fill(black)
    text("Value:", 120, 145)
    text("$0.10", 120, 160)
    waterBottle3.velocity.x = -1;
    waterBottle3.velocity.y = -1;
    waterBottle4.velocity.x = -1;
    waterBottle4.velocity.y = -1;
  }

  if (waterBottle3.position.x == dispenserX) {
    waterBottle3.remove();
    waterBottle4.remove();
    fill(white);
    rect(135, 310, 50, 50)
    fill(black)
    text("Total:", 145, 335)
    text("$0.20", 145, 350)
    text("Thank you!", 107, 190)
    noLoop();
  }

  drawSprites();
}
