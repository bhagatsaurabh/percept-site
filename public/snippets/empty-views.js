let canvas = new Percept.Canvas(document.getElementById("canvas"));

let drawing = new Percept.Drawing(canvas);

for (let i = 0; i < 50; i++) {
  let empty = new Percept.View.Empty(
    "empty" + i,
    Percept.Vector.Random(0, 448, 0, 400)
  );
  empty.on("update", (view) => {
    Percept.Debug.debugPoint(view.id, drawing, view.absolutePosition, { color: "#ffd966" });
  });

  drawing.add(empty);
}

canvas.draw(drawing);
