let canvas = new Percept.Canvas(document.getElementById("canvas"));

let drawing = new Percept.Drawing(canvas);

for (let i = 0; i < 100; i++) {
  let image = new Percept.View.Image(
    "image" + i,
    Percept.Vector.Random(0, 448, 0, 400),
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Barrel_icon.png",
    50,
    50
  );

  drawing.add(image);
}

canvas.draw(drawing);
