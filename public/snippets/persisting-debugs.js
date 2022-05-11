let canvas = new Percept.Canvas(document.getElementById("canvas"));

let circle1 = new Percept.View.Ellipse(
  "circle1",
  new Percept.Vector(canvas.width * .25, 200), 30, 30,
  { fill: true, fillColor: "red" }
);
let circle2 = new Percept.View.Ellipse(
  "circle2",
  new Percept.Vector(80, 0), 15, 15,
  { fill: true, fillColor: "green" }
);
let circle3 = new Percept.View.Ellipse(
  "circle3",
  new Percept.Vector(25, 0), 5, 5,
  { fill: true, fillColor: "blue" }
);
circle3.parent = circle2;
circle2.parent = circle1;

let circle4 = new Percept.View.Ellipse(
  "circle4",
  new Percept.Vector(canvas.width * 0.7, 200), 30, 30,
  { fill: true, fillColor: "red" }
);
let circle5 = new Percept.View.Ellipse(
  "circle5",
  new Percept.Vector(80, 0), 15, 15,
  { fill: true, fillColor: "green" }
);
let circle6 = new Percept.View.Ellipse(
  "circle6",
  new Percept.Vector(25, 0), 5, 5,
  { fill: true, fillColor: "blue" }
);
circle6.parent = circle5;
circle5.parent = circle4;

let drawing = new Percept.Drawing(canvas, () => {
  circle2.rotation += 1;
  circle3.rotation += 4;

  circle5.rotation += 1;
  circle6.rotation += 4;

  Percept.Debug.debugPoint("normalDebug", drawing, circle3.absolutePosition, {
    color: "orange",
    radius: 3,
  });
  Percept.Debug.debugPoint("persistingDebug", drawing, circle6.absolutePosition, {
    color: "orange",
    radius: 3
  }, 300);
});

drawing.add(circle1);
drawing.add(circle4);

canvas.draw(drawing);
