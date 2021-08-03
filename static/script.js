var machine;
var theScreen;
var dispenser;
var receipt;
var waterBottle;
var waterBottleImg;

var x;
var y;

var bottleX = 100;
var bottleY = 400;

var dispenserX = 500;
var dispenserY = 300;

function preload() {
  waterBottleImg = loadImage("static/water-bottle.jpeg");
}

function setup() {
  var canvasDiv = document.getElementById('p5Canvas')
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  // var myCanvas = createCanvas(width, height);
  let renderer = createCanvas(width, height);
  // myCanvas.parent(canvasDiv);
  renderer.parent(canvasDiv);

}

function draw() {
  background(255, 255, 255);

  let blue = color(255, 204, 0);
  fill(blue);
  machine = rect(500, 0, 200, 300, 10); // x-axis, y-axis, width, height, border-radius
  let white = color(255,255,255)
  fill(white);
  theScreen = rect(425, 150, 150, 100, 10)
  let black = color(0, 0, 0)
  fill(black);
  receipt = rect(520, 350, 50, 10)
  let yellow = color(100, 100, 100)
  fill(yellow);
  dispenser = ellipse(dispenserX, dispenserY, 50); // x, y, diameter
  dispenser.shapeColor = 'white';

  machine.immovable = true;
  dispenser.immovable = true;

  waterBottle = createSprite(bottleX, bottleY, 1, 1);
  waterBottle.addImage(waterBottleImg);

  if (dist(bottleX, bottleY, mouseX, mouseY) < 50 && mouseIsPressed) { // waterBottle
    waterBottle.remove(waterBottleImg)
    screenBottle = text("10c", 425,150,10,10)
  }

  drawSprites();
}
