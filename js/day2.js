let solve = D => {
  p=console.log
  q=_=>D.forEach(([k,v])=>c[k[0]](v))
  x=y=0;c={f:v=>x+=v,d:v=>y+=v,u:v=>y-=v};q();p(x*y) //a
  y=a=0;c.f=v=>{a+=v*y};q();p(x*a) //b
};

// day 2
fetch('data/2.txt')
.then(s => s.text())
.then(data => {
  solve(data.trim().split('\r\n').map(x => {
    return [x.split(' ')[0], parseInt(x.split(' ')[1])];
  }));
  return;

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
