// day 4

const solve = data => {
  let raw = data.trim().split('\r\n\r\n');
  let input = raw[0].split(',').map(x => parseInt(x));
  let cards = raw.slice(1, raw.length).map(c => {
    return c.trim().split(/\s+/).map(v => ({value: parseInt(v), marked: 0}));
  });
  let size = Math.sqrt(cards[0].length);

  const mark = (card, n) => {
    card.forEach(e => {
      e.marked = e.marked || e.value == n;
    });
  };

  const check = row => {
    return row.filter(e => e.marked).length == size;
  };

  const bingo = card => {
    for (let i=0; i<size; i++) {
      let row = card.filter((e, j) => (j - (j % size)) / size == i);
      let col = card.filter((e, j) => j % size == i);
      if (check(row) || check(col))
        return true;
    }
    return false;
  };

  const getScore = (card, n) => {
    let s = 0;
    card.forEach(e => { if (!e.marked) s += e.value; });
    return s * n;
  };

  let a = null;
  let b = null;
  input.forEach(n => {
    cards.forEach((card, i) => {
      if (card.score) return;
      mark(card, n);
      if (!bingo(card))
        return;
      card.score = getScore(card, n);
      a = a || card.score;
      b = card.score;
    });
  });

  console.log(a, b);
};

fetch('data/4.txt')
.then(s => s.text())
.then(data => {
  solve(data);
});
