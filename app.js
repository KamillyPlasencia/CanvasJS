let sunPosX;
let moonPosX;
let isDay = true;
let stars = [];

function setup() {
  createCanvas(800, 600);
  sunPosX = width / 4;
  moonPosX = width - width / 4;

  // Crear estrellas
  for (let i = 0; i < 100; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  if (isDay) {
    drawDay();
  } else {
    drawNight();
  }
  
  // Árboles
  drawTree(100, height - 50, 0.5);
  drawTree(200, height - 100, 0.4);
  drawTree(600, height - 70, 0.6);
  drawTree(700, height - 120, 0.3);
  
  // Montaña
  drawMountain(width / 2, height, 1);
  
  //drawCloud(200,200);
}

function drawDay() {
  // Sol
  fill(255, 255, 24);
  ellipse(sunPosX, height / 1, 200);
  
  // Transición del cielo
  let skyColor = lerpColor(color(135, 206, 235), color(0), map(sunPosX, width / 4, width - width / 4, 0, 1));
  background(skyColor);
  
  // Actualizar posición del sol
  sunPosX += 1;
  if (sunPosX > width - width / 3) {
    isDay = false;
  }
}

function drawNight() {
  // Luna
  fill(200);
  ellipse(moonPosX, height / 3, 130);
  
  // Estrellas
  fill(255);
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    ellipse(star.x, star.y, 2);
  }
  
  // Actualizar posición de la luna
  moonPosX -= 1;
  if (moonPosX < width / 4) {
    isDay = true;
  }
}

function drawTree(x, y) {
  // Dibuja un árbol en las coordenadas (x, y)
  push();
  translate(x, y);
  fill(109, 69, 1);
  rect(-10, 0, 20, 100);
  fill(331, 139, 34);
  triangle(-50, 0, 0, -100, 50, 0);
  pop();
}

function drawMountain(x, y) {
  // Dibuja una montaña en las coordenadas (x, y)
  push();
  translate(x, y);
  fill(0, 170, 0);
  triangle(-210, 3, 3, -230, 200, 6);
  
}
function drawCloud (x,y) {
  
  noStroke();
  
  fill(255,255,255);
  
  // Círculos externos
  ellipse(x - 20, y, 50, 50);
  ellipse(x, y - 20, 50, 50);
  ellipse(x + 20, y, 50, 50);
  
  // Círculos internos
  ellipse(x, y, 50, 50);
  ellipse(x + 40, y, 50, 50);
}

