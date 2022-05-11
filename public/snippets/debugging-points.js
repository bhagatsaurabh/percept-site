let canvas = new Percept.Canvas(document.getElementById("canvas"));

let poly = new Percept.View.Polygon(
  "poly1",
  [
    new Percept.Vector(0, 0),
    new Percept.Vector(100, 50),
    new Percept.Vector(70, 100),
    new Percept.Vector(40, 70),
    new Percept.Vector(20, 20),
    new Percept.Vector(10, 10),
  ],
  Percept.Handle.AUTO,
  { fill: true, fillColor: "#ffffff" }
);
poly.position = new Percept.Vector(200, 200);

let drawing = new Percept.Drawing(canvas, () => {
  poly.localRotation += 1;

  Percept.Debug.debugPoint("polyCenter", drawing, poly.absolutePosition, {
    color: "blue",
    radius: 3,
  });
});

drawing.add(poly);

canvas.draw(drawing);
