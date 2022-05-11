// Create a new Percept.Canvas
let canvas = new Percept.Canvas(document.getElementById("canvas"));

// Create a new Drawing by providing the reference to Percept.Canvas
let drawing = new Percept.Drawing(canvas);

const position = new Percept.Vector(canvas.width / 2, canvas.height / 2);

// Create a new Line View
let line = new Percept.View.Line(
  "myLine",
  new Percept.Vector(canvas.width / 2, canvas.height / 2),
  position.add(100),
  0,
  { color: "cyan", lineWidth: 5 }
);

// Add the new Line View to Drawing
drawing.add(line);

// Start rendering the Drawing
canvas.draw(drawing);
