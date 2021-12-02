// day 2
fetch('data/2.txt')
.then(s => s.text())
.then(data => {
  data = data.trim().split('\r\n');
  let s2 = data.map(x => { return x.split(' '); });

  let hor = 0;
  let ver = 0;
  s2.forEach(e => {
    hor += (e[0] == 'forward' ? 1 : 0) * parseInt(e[1]);
    ver += (e[0] == 'down' ? 1 : e[0] == 'up' ? -1 : 0) * parseInt(e[1]);
  });
  console.log(hor * ver);

  hor = 0;
  ver = 0;
  let aim = 0;
  let list = [];
  let max = {aim:0, hor:0, ver:0};
  s2.forEach(e => {
    aim += (e[0] == 'down' ? 1 : e[0] == 'up' ? -1 : 0) * parseInt(e[1]);
    hor += (e[0] == 'forward' ? 1 : 0) * parseInt(e[1]);
    ver += (e[0] == 'forward' ? 1 : 0) * parseInt(e[1]) * aim;
  });
  console.log(hor * ver);
});
