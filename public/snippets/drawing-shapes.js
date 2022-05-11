// Create a new Percept.Canvas
let canvas = new Percept.Canvas(document.getElementById("canvas"));

// Create Shape Views
let ellipse = new Percept.View.Ellipse(
  "ellipse",
  new Percept.Vector(canvas.width * 0.11, 50), 30, 50,
  { fill: true, fillColor: "pink", shadowColor: "black", shadowBlur: 3 }
);

let circle = new Percept.View.Ellipse(
  "circle",
  new Percept.Vector(canvas.width * 0.44, 50), 25, 25,
  { fill: true, outline: true, fillColor: "purple", outlineColor: "green" }
);

let line = new Percept.View.Line(
  'myLine',
  new Percept.Vector(80, 250),
  new Percept.Vector(180, 350), 0,
  { color: 'red', lineWidth: 3 }
);

let poly = new Percept.View.Polygon(
  'poly',
  [
    new Percept.Vector(100, 0),
    new Percept.Vector(200, 100),
    new Percept.Vector(150, 200),
    new Percept.Vector(50, 200),
    new Percept.Vector(0, 100),
  ],
  Percept.Handle.AUTO,
  { fill: true, fillColor: 'green' }
);
poly.position = new Percept.Vector(330, 300);

let rect = new Percept.View.Rectangle(
  'rect1',
  new Percept.Vector(canvas.width / 2 , canvas.height/ 2), 40, 40,
  { fill: true, fillColor: 'orange' }
);

let drawing = new Percept.Drawing(canvas);

drawing.add([ellipse, circle, line, poly, rect]);

canvas.draw(drawing);
