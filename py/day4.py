
data = open('./data/4.txt').read().split('\n\n')
numbers = [int(x) for x in data[0].split(',')]
cards = [[int(n) for n in chunk.split()] for chunk in data[1:]]
size = int(len(cards[0])**0.5)
mark = {}
silver, gold = 0, 0

for n in numbers:
    mark[n] = 1
    for i in range(len(cards)-1, -1, -1):
        if any((
            sum([1 for x in cards[i][n*size:(n+1)*size] if x in mark]) == size or
            sum([1 for x in cards[i][n::size] if x in mark]) == size
        ) for n in range(size)):
            gold = sum([x for x in cards.pop(i) if not x in mark]) * n
            silver = silver or gold

print(silver, gold)
