var capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(300, 100);
  capture.hide();//uncomment this to hide the video DOM element
}

function draw() {
  background(255);
  tint(120,0,0);
  image(capture, 0, 0, 320, 240);
}