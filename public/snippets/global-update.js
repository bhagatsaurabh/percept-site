let canvas = new Percept.Canvas(document.getElementById("canvas"));

let rect1 = new Percept.View.Rectangle(
  "rect1",
  Percept.Vector.Random(0, 400, 0, 400), 40, 40,
  { fill: true, fillColor: "violet" }
);

let rect2 = new Percept.View.Rectangle(
  "rect2",
  Percept.Vector.Random(0, 400, 0, 400), 20, 20,
  { fill: true, fillColor: "orange" }
);

let rect3 = new Percept.View.Rectangle(
  "rect3",
  Percept.Vector.Random(0, 400, 0, 400), 60, 60,
  { fill: true, fillColor: "lime" }
);

let drawing = new Percept.Drawing(canvas, () => {
  rect1.localRotation += 0.2;
  rect2.localRotation += 1;
  rect3.localRotation += 0.5;
});

drawing.add(rect1);
drawing.add(rect2);
drawing.add(rect3);

canvas.draw(drawing);
