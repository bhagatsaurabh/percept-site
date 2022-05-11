let canvas = new Percept.Canvas(document.getElementById("canvas"));

let drawing = new Percept.Drawing(canvas);

for (let i = 0; i < 20; i++) {
  let strider = new Percept.View.Ellipse(
    "strider" + i,
    new Percept.Vector(200, 200), 4, 4,
    {
      fill: true, fillColor: Percept.Color.Random().hexValue,
      shadowColor: "black", shadowBlur: 3,
    }
  );

  strider.currentTarget = Percept.Vector.Random(canvas);
  strider.speed = Math.random() * 0.04 + 0.03;
  strider.on("update", (view) => {
    if (Percept.Vector.Distance(view.absolutePosition, view.currentTarget) <= 1) {
      view.currentTarget = Percept.Vector.Random(canvas);
    }

    view.position = Percept.Vector.Lerp(view.position, view.currentTarget, view.speed);
  });

  drawing.add(strider);
}

canvas.draw(drawing);
