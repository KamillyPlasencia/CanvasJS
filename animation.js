
// Set canvas dimensions
const canvasWidth = 800;
const canvasHeight = 600;

const canvas = document.createElement('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.body.appendChild(canvas);

// Create a new canvas instance
const context = canvas.getContext('2d');

// Define colors
const skyColors = {
  day: '#87CEEB',     // Light blue
  night: '#000033'    // Dark blue
};

// Define the initial state
let time = 0;

const stars = generateStars(100);

// Generate random stars positions
function generateStars(numStars) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvasWidth;
    const y = Math.random() * canvasHeight;
    stars.push({ x, y });
  }
  return stars;
}

// Update the canvas
function updateCanvas() {
  // Clear the canvas
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Set the sky color based on the time
  const currentColor = time < 0.5 ? skyColors.day : skyColors.night;
  context.fillStyle = currentColor;
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw stars
  context.fillStyle = '#FFFFFF'; // White
  stars.forEach((star) => {
    context.beginPath();
    context.arc(star.x, star.y, 1, 0, 2 * Math.PI);
    context.fill();
  });

  // Draw sun or moon based on the time
  const sunRadius = 40;
  const moonRadius = 30;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  if (time < 0.5) {
    // Draw the sun
    const sunY = (1 - time) * canvasHeight;
    context.fillStyle = '#FFD700'; // Yellow
    context.beginPath();
    context.arc(centerX, sunY, sunRadius, 0, 2 * Math.PI);
    context.fill();
  } else {
    // Draw the moon
    const moonY = (time - 0.5) * canvasHeight;
    context.fillStyle = '#FFFFFF'; // White
    context.beginPath();
    context.arc(centerX, moonY, moonRadius, 0, 2 * Math.PI);
    context.fill();
  }

  const treeHeight = 120;

  // Draw mountains
  context.fillStyle = '#A9A9A9'; // Gray
  context.beginPath();
  context.moveTo(0, canvasHeight );
  context.lineTo(150, canvasHeight  - 200);
  context.lineTo(300, canvasHeight );
  context.fill();


  context.beginPath();
  context.moveTo(200, canvasHeight);
  context.lineTo(350, canvasHeight - 200);
  context.lineTo(500, canvasHeight);
  context.fill();


  context.beginPath();
  context.moveTo(canvasWidth, canvasHeight);
  context.lineTo(canvasWidth - 150, canvasHeight - 200);
  context.lineTo(canvasWidth - 300, canvasHeight);
  context.fill();

  // Draw trees
  
  context.fillStyle = '#964B00'; // Brown
  context.fillRect(100, canvasHeight - treeHeight, 40, treeHeight);
  context.fillRect(200, canvasHeight - treeHeight, 40, treeHeight);
  context.fillRect(500, canvasHeight - treeHeight, 40, treeHeight);

  context.beginPath();
  context.arc(115, canvasHeight - treeHeight, 50, 0, 2 * Math.PI);
  context.fillStyle= '#00FF00'
  context.fill();

  context.beginPath();
  context.arc(215, canvasHeight - treeHeight, 50, 0, 2 * Math.PI);
  context.fillStyle= '#00FF00'
  context.fill();

  context.beginPath();
  context.arc(515, canvasHeight - treeHeight, 50, 0, 2 * Math.PI);
  context.fillStyle= '#00FF00'
  context.fill();

  //context.fillStyle= '#00FF00'
  //context.arc(100,canvasHeight - treeHeight,50, 0, 2 * Math.PI)

  

  // Draw animals
  //const animalSize = 20;
  //const animalY = canvasHeight - treeHeight + animalSize / 2;
  //const animalPositions = [130, 230, 530];
  //context.fillStyle = '#FF4500'; // Orange

  //animalPositions.forEach((x) => {
  //  context.beginPath();
  //  context.arc(x, animalY, animalSize, 0, 2 * Math.PI);
  //  context.fill();
  //});

  // Increase time for the next frame
  time += 0.01;
  if (time > 1) {
    time = 0;
  }

}

// Call the update function every 100 milliseconds
setInterval(updateCanvas, 100);

