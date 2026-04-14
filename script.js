function plotGraph() {
  const canvas = document.getElementById("graph");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const type = document.getElementById("func").value;

  // Draw grid
  ctx.strokeStyle = "#ddd";
  for (let i = 0; i < canvas.width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  for (let i = 0; i < canvas.height; i += 50) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Draw axis
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  ctx.lineTo(canvas.width, canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, canvas.height);
  ctx.stroke();

  // Plot graph
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let x = 1; x < canvas.width; x++) {
    let y;

    if (type === "n") {
      y = x;
    } else if (type === "n2") {
      y = (x * x) / 200;
    } else if (type === "logn") {
      y = Math.log(x) * 50;
    }

    ctx.lineTo(x, canvas.height - y);
  }

  ctx.strokeStyle = "#ff3d00";
  ctx.lineWidth = 3;
  ctx.stroke();
}