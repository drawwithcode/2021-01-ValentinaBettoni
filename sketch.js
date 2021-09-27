function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(24);
}

function draw() {
  background(0);
  noFill();

  let myColor = lerpColor(color("white"), color("Indigo"), frameCount / 150);
  let myColor2 = lerpColor(
    color("Indigo"),
    color("MediumPurple"),
    frameCount / 150
  );

  box(50, 50, 50);
  stroke(0);
  rotateX(0);

  for (var i = 0; i < 8; i++) {
    push();
    stroke(myColor2);
    rotate((360 * i) / 8);
    rotateX(frameCount * 1);
    translate(350, 50);
    box(50, 50, 50);

    for (var j = 0; j < 6; j++) {
      push();
      stroke(myColor);
      rotate((360 * j) / 6);
      rotateZ(frameCount * 2);
      translate(100, 0);
      box(20, 20, 20);
      pop();
    }
    translate();
    pop();
  }
}
