fetch('./data/5.txt')
  .then(res => res.text())
  .then(text => {
    let ctx = document.querySelector('canvas').getContext('2d');
    let min = {x: -1, y: -1};
    let max = {x: -1, y: -1};
    let rows = text.trim().split('\r\n').map(row => {
      let nums = row.replace(' -> ', ',').split(',')
      let p = {
        x1: parseInt(nums[0]),
        y1: parseInt(nums[1]),
        x2: parseInt(nums[2]),
        y2: parseInt(nums[3]),
      };
      min.x = min.x == -1 ? Math.min(p.x1, p.x2) : Math.min(min.x, p.x1, p.x2);
      min.y = min.y == -1 ? Math.min(p.y1, p.y2) : Math.min(min.y, p.y1, p.y2);
      max.x = max.x == -1 ? Math.max(p.x1, p.x2) : Math.max(max.x, p.x1, p.x2);
      max.y = max.y == -1 ? Math.max(p.y1, p.y2) : Math.max(max.y, p.y1, p.y2);
      return p;
    });

    console.log(min, max)
    ctx.canvas.width = max.x + min.x;
    ctx.canvas.height = max.y + min.y;
    ctx.lineWidth = 2;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#fff';
    ctx.globalAlpha = 0.5;
    rows.forEach(line => {
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    });
  });
