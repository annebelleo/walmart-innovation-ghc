var machine;
var theScreen;
var dispenser;
var receipt;
var waterBottle;
var waterBottleImg;

var x;
var y;

var bottleX1 = 300;
var bottleY1 = 350;
var bottleX2 = 300;
var bottleY2 = 320;
var bottleX3 = 250;
var bottleY3 = 350;
var bottleX4 = 250;
var bottleY4 = 320;

var dispenserX = 575;
var dispenserY = 250;

function preload() {
  // waterBottleImg = loadImage("bottle.png");  // idk why this doesn't work
}

function setup() {
  var canvasDiv = document.getElementById('p5Canvas')
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  // var myCanvas = createCanvas(width, height);
  let renderer = createCanvas(width, height);
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
  machine = rect(500, 75, 150, 300, 10); // x-axis, y-axis, width, height, border-radius
  let white = color(255, 255, 255)
  fill(white);
  theScreen = rect(525, 100, 100, 100, 10)
  let black = color(0, 0, 0)
  fill(black);
  receipt = rect(575, 300, 50, 10)
  let yellow = color(100, 100, 100)
  fill(yellow);
  dispenser = ellipse(dispenserX, dispenserY, 50); // x, y, diameter
  dispenser.shapeColor = 'white';

  machine.immovable = true;
  dispenser.immovable = true;

  for (var i = 0; i < waterBottle.length; i++) {
    waterBottle[i].shapeColor = 'lightblue';
  }

  for (var i = 0; i < 2; i++) {
    waterBottle[i].velocity.x = 2;
    waterBottle[i].velocity.y = -0.6;
  }

  if (waterBottle1.position.x == dispenserX+1) {
    waterBottle1.remove();
    waterBottle2.remove()
    fill(black)
    text("Value:", 560, 145)
    text("$0.10", 560, 160)
  }

  if (waterBottle3.position.x == dispenserX+1) {
    waterBottle3.remove();
    waterBottle4.remove();
    fill(white);
    rect(575, 310, 50, 50)
    fill(black)
    text("Total:", 585, 335)
    text("$0.20", 585, 350)
    text("Thank you!", 548, 190)
    noLoop();
  }

  drawSprites();
}
