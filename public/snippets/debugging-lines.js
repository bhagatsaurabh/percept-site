let canvas = new Percept.Canvas(document.getElementById("canvas"));

let rect1 = new Percept.View.Rectangle(
  "rect1",
  new Percept.Vector(200, 200), 40, 40,
  { fill: true, fillColor: "lightgreen" }
);
let rect2 = new Percept.View.Rectangle(
  "rect2",
  new Percept.Vector(100, 0), 20, 20,
  { fill: true, fillColor: "lightblue" }
);
let rect3 = new Percept.View.Rectangle(
  "rect3", new Percept.Vector(50, 0), 10, 10,
  { fill: true, fillColor: "lightgrey" }
);

rect3.parent = rect2;
rect2.parent = rect1;

let drawing = new Percept.Drawing(canvas, () => {
  rect2.rotation += 1;
  rect3.rotation += 2;

  Percept.Debug.debugLine("debug1", drawing, rect1.absolutePosition, rect2.absolutePosition, {
    color: "yellow",
  });
  Percept.Debug.debugLine("debug2", drawing, rect2.absolutePosition, rect3.absolutePosition, {
    color: "yellow",
  });
});

drawing.add(rect1);

canvas.draw(drawing);
