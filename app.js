let isDay = true; // Variable para controlar si es de día o de noche
let sunPosition = 0; // Posición del sol (0 representa el amanecer y el atardecer)

function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (isDay) {
    // Fondo de día
    background(135, 206, 235); // Cielo azul claro

    // Sol
    fill(255, 255, 0); // Amarillo
    noStroke();
    let sunX = map(sunPosition, 0, width, -100, width + 100);
    let sunY = map(sunPosition, 0, width, height + 50, -50);
    ellipse(sunX, sunY, 100, 100);

    // Movimiento de los árboles (ejemplo)
    drawTree(width / 2, height, 200);
  } else {
    // Fondo de noche
    background(0); // Cielo negro

    // Luna
    fill(255); // Blanco
    noStroke();
    let moonX = map(sunPosition, 0, width, -100, width + 100);
    let moonY = map(sunPosition, 0, width, height + 50, -50);
    ellipse(moonX, moonY, 80, 80);

    // Movimiento de las estrellas (ejemplo)
    drawStars();
  }

  // Actualizar la posición del sol
  sunPosition += 1;
  if (sunPosition > width) {
    sunPosition = 0;
    isDay = !isDay; // Cambiar entre día y noche
  }
}

// Función para dibujar un árbol en una posición dada
function drawTree(x, y, height) {
  fill(139, 69, 19); // Marrón oscuro
  rect(x - 10, y, 20, -height); // Tronco

  fill(34, 139, 34); // Verde oscuro
  let radius = 80;
  let angle = PI / 4;
  ellipse(x, y - height, radius, radius); // Copa del árbol
  ellipse(x + radius * cos(angle), y - height - radius * sin(angle), radius, radius);
  ellipse(x - radius * cos(angle), y - height - radius * sin(angle), radius, radius);
}

// Función para dibujar estrellas en posiciones aleatorias
function drawStars() {
  fill(255); // Blanco
  noStroke();
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 3, 3);
  }
}
