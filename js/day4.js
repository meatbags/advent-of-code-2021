
fetch('./data/4.txt')
  .then(res => res.text())
  .then(text => {
    let data = text.split('\r\n\r\n');
    let numbers = data[0].split(',').map(x => parseInt(x));
    let cards = data.slice(1).map(chunk => chunk.trim().split(/\s+/));
    let size = Math.sqrt(cards[0].length);
    let ref = {};
    let silver = null;
    let gold = null;

    let winning = card => {
      for (let i=0; i<size; i++) {
        if (
          card.filter((n, j) => parseInt(j / size) == i && ref[n]).length == size ||
          card.filter((n, j) => j % size == i && ref[n]).length == size
        ) return true;
      }
      return false;
    };

    numbers.forEach(n => {
      ref[n] = 1;
      for (let i=cards.length-1; i>=0; i--) {
        if (!winning(cards[i])) continue;
        let card = cards.splice(i, 1)[0];
        gold = n * card.map(x => ref[x] ? 0 : parseInt(x)).reduce((a, b) => a + b);
        silver = silver || gold;
      };
    });

    console.log(silver, gold);
  });
