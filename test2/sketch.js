let rotationAngle = 0;
let isDragging = false;
let dragStartAngle = 0;
let lpType = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  
  if (!isDragging) {
    rotationAngle += 1;
  }
  
  rotate(rotationAngle);
  setLPStyle();
  drawLP();
}

function setLPStyle() {
  if (lpType === 0) {
    fill('#FF5733');
    stroke('#C70039');
    strokeWeight(2);
  } else if (lpType === 1) {
    fill('#33FF57');
    stroke('#39C700');
    strokeWeight(4);
  } else if (lpType === 2) {
    fill('#3357FF');
    stroke('#0039C7');
    strokeWeight(6);
  } else if (lpType === 3) {
    fill('#F3FF33');
    stroke('#C7C700');
    strokeWeight(8);
  }
}

function drawLP() {
  ellipse(0, 0, 200, 260);
}

function mousePressed() {
  if (isInsideLP(mouseX, mouseY)) {
   // changeLPType();
    startDragging(mouseX, mouseY);
  }
}

function mouseDragged() {
  if (isDragging) {
    updateRotation(mouseX, mouseY);
  }
}

function mouseReleased() {
  stopDragging();
}

function touchStarted() {
  // if (isInsideLP(touchX, touchY)) {
  //   //changeLPType();
  //   startDragging(touchX, touchY);
  // }
  // return false;
  
    let x = touchX;
  let y = touchY;
  if (isInsideLP(x, y)) {
    //changeLPType();
    startDragging(x, y);
  }
    return false;
}

function touchMoved() {
  if (isDragging) {
    updateRotation(touchX, touchY);
  }
  return false;
}

function touchEnded() {
  stopDragging();
  return false;
}

function isInsideLP(x, y) {
  let d = dist(x, y, width / 2, height / 2);
  return d < 100;
}

//function changeLPType() {
//  lpType = (lpType + 1) % 4;
//}

function startDragging(x, y) {
  isDragging = true;
  dragStartAngle = atan2(y - height / 2, x - width / 2) - rotationAngle;
}

function updateRotation(x, y) {
  let currentAngle = atan2(y - height / 2, x - width / 2);
  rotationAngle = currentAngle - dragStartAngle;
}

function stopDragging() {
  isDragging = false;
}