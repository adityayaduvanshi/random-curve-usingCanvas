function fn1() {
  var dataValue = document.getElementById("inputData").value;

  console.log(dataValue);

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  canvas.width = window.innerWidth - 50;

  var startX = 0;
  var startY = 50;
  var zigzagSpacing = 5;
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.beginPath();
  context.moveTo(startX, startY);

  let count = dataValue;

  for (var n = 0; n < count; n++) {
    var x = startX + (n + 1) * zigzagSpacing;
    var y;

    if (n % 2 == 0) {
      y = startY + (Math.random() * 100 + 20);
    } else {
      y = startY + (Math.random() * 100 + 100);
    }
    context.lineTo(x, y);
  }

  context.stroke();
}
