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

let dragState = false;

function preload() {
  waterBottleImg = loadImage("static/water-bottle.jpeg");
}

function mousePressed() {
  let d = dist(x, y, mouseX, mouseY);
  if (d <= ballSize / 2) {
    dragState = true;

  }

function mouseDragged() {
  if ((mouseX > bottleX - 50) && (mouseX < bottleX + 50)) {
    if ((mouseY > bottleY - 50) && (mouseY < bottleY + 50)) {
      bottleX = mouseX;
      bottleY = mouseY
    }
  }
}

function setup() {
  var canvasDiv = document.getElementById('p5Canvas')
  var width = canvasDiv.offsetWidth - 50;
  var height = canvasDiv.offsetHeight;
  console.log(width);
  console.log(height);
  var myCanvas = createCanvas(width, height);
  myCanvas.parent(canvasDiv);

}

function draw() {
  background(255, 255, 255);

  let blue = color(255, 204, 0);
  fill(blue);
  machine = rect(400, 100, 200, 400, 10); // x-axis, y-axis, width, height, border-radius
  let white = color(255,255,255)
  fill(white);
  theScreen = rect(425, 150, 150, 100, 10)
  let black = color(0, 0, 0)
  fill(black);
  receipt = rect(520, 350, 50, 10)
  let yellow = color(100, 100, 100)
  fill(yellow);
  dispenser = ellipse(500, 300, 50); // x, y, diameter
  dispenser.shapeColor = 'white';

  machine.immovable = true;
  dispenser.immovable = true;

  waterBottle = createSprite(100, 400, 1, 1);
  waterBottle.addImage(waterBottleImg);

  drawSprites();
}
