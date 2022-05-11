let canvas = new Percept.Canvas(document.getElementById("canvas"));

let shape = new Percept.View.Rectangle(
  "rect",
  new Percept.Vector(canvas.width / 2, canvas.height / 2), 100, 30,
  {
    fill: true,
    fillColor: new Percept.View.LinearGradient(
      Percept.Vector.Zero(), 45,
      Percept.Handle.AUTO,
      ["#57cfd2", "#987bd2", "#ffd966"],
      [0, 0.5, 1]
    ),
    shadowColor: "#000",
    shadowBlur: 5,
  }
);
let text = new Percept.View.Text(
  "caption",
  new Percept.Vector(80, 0), "Drag Me !",
  { font: "bold 12px Arial", fillColor: 'green' }
);

text.parent = shape;

shape.on("drag", (view, pos) => {
  view.position = pos;
});
shape.on("update", () => {
  shape.props.fillColor.degrees -= 5;
  shape.localRotation += 1;
  text.rotation -= 1;
});

let drawing = new Percept.Drawing(canvas);

drawing.add(shape);

canvas.draw(drawing);
