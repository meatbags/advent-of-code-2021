// day 1
fetch('data/1.txt')
.then(s => s.text())
.then(s => {
  s = s.trim().split('\r\n').map(x => parseInt(x));
  console.log(s.map((v, i) => s[i-1] < v).reduce((a, b) => a + b));
  console.log(s.map((v, i) => s[i+3] > v).reduce((a, b) => a + b));
});
