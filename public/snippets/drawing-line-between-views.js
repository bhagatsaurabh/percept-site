// Create a new Percept.Canvas
let canvas = new Percept.Canvas(document.getElementById("canvas"));

// Create Views
let rectangle1 = new Percept.View.Rectangle(
  "rect1",
  new Percept.Vector(200, 200), 15, 15,
  { fill: true, fillColor: "red" }
);
let rectangle2 = new Percept.View.Rectangle(
  "rect2",
  new Percept.Vector(100, 0), 15, 15, // The position here is relative to parent
  { fill: true, fillColor: "green" }
);

rectangle2.parent = rectangle1;

// Draw a line between two Views 
let line = new Percept.View.Line("myLine", rectangle1, rectangle2, 0, {
  color: "lightgreen",
  lineWidth: 3,
});

// Create a new Drawing and adding Views
let drawing = new Percept.Drawing(canvas, () => {
  // A Global update function, called after every render cycle
  rectangle2.rotation += 0.4;
});

drawing.add(rectangle1);
drawing.add(line);

// Start rendering the Drawing
canvas.draw(drawing);
