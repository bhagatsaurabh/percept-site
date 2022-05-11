let canvas = new Percept.Canvas(document.getElementById("canvas"));

let drawing = new Percept.Drawing(canvas);

let shapes = [];
let shape1 = new Percept.View.Rectangle(
  "rect",
  new Percept.Vector(canvas.width * 0.2, canvas.height / 2), 35, 35,
  { fill: true, fillColor: "#99FFCC" }
);
let shape2 = new Percept.View.Ellipse(
  "circle",
  new Percept.Vector(canvas.width * 0.4, canvas.height / 2), 17.5, 17.5,
  { fill: true, fillColor: "#CCFF99" }
);
let shape3 = new Percept.View.Polygon(
  "poly",
  [new Percept.Vector(17.5, 0), new Percept.Vector(35, 28), new Percept.Vector(0, 28)],
  Percept.Handle.AUTO,
  { fill: true, fillColor: "#FFCC99	" }
);
shape3.position = new Percept.Vector(canvas.width * 0.6, canvas.height / 2);

let shape4 = new Percept.View.Line(
  "line",
  new Percept.Vector(0, 0), new Percept.Vector(35, 35), 0.5,
  { lineWidth: 5, color: "#FFFF99" }
);
shape4.position = new Percept.Vector(canvas.width * 0.8, canvas.height / 2);

shapes.push(shape1, shape2, shape3, shape4);

shapes.forEach((shape) => {
  shape.on("drag", (view, pos) => (view.position = pos));
});

let caption = new Percept.View.Text(
  "caption",
  new Percept.Vector(224, canvas.height / 2.8),
  "Drag shapes",
  { font: "bold 12px Arial", fillColor: 'green' }
);

drawing.add(shapes);
drawing.add(caption);

canvas.draw(drawing);
