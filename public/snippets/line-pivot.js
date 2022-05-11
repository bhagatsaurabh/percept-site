// Create a new Percept.Canvas
let canvas = new Percept.Canvas(document.getElementById("canvas"));

// Create Views
let line1 = new Percept.View.Line(
  "line1",
  new Percept.Vector(canvas.width * 0.25, 200),
  new Percept.Vector(canvas.width * 0.45, 200),
  0,
  { color: "red", lineWidth: 5 }
);

let line2 = new Percept.View.Line(
  "line2",
  new Percept.Vector(canvas.width * 0.65, 200),
  new Percept.Vector(canvas.width * 0.9, 200),
  0.5,
  { color: "green", lineWidth: 5 }
);

let drawing = new Percept.Drawing(canvas, () => {
  line1.localRotation += 0.5;
  line2.localRotation += 0.5;

  Percept.Debug.debugPoint("line1Pivot", drawing, line1.absolutePosition, { color: "blue", radius: 6 });
  Percept.Debug.debugPoint("line2Pivot", drawing, line2.absolutePosition, { color: "blue", radius: 6 });
});

drawing.add(line1);
drawing.add(line2);

canvas.draw(drawing);
