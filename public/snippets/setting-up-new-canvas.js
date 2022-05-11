// Get reference to the canvas element
const canvasElement = document.getElementById("canvas");

// Create a new Percept.Canvas using above reference
let canvas = new Percept.Canvas(canvasElement);

// Percept.Canvas registers the provided <canvas> and context
canvas.context.fillStyle = "green";
canvas.context.font = 'bold 20px Arial';
canvas.context.fillText("New Canvas", 100, 100);
