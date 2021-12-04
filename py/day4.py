from math import sqrt

data = open('./data/4.txt').read().split('\n\n')
numbers = [int(x) for x in data[0].split(',')]
marked = {}
cards = [[int(n) for n in chunk.split()] for chunk in data[1:]]
s = int(sqrt(len(cards[0])))

def check(card):
    for n in range(s):
        row = sum([1 for x in card[n*s:n*s+s] if x in marked])
        col = sum([1 for x in card[n::s] if x in marked])
        if row == s or col == s:
            return True

silver, gold = 0, 0
for n in numbers:
    marked[n] = True
    for i in range(len(cards)-1, -1, -1):
        if check(cards[i]):
            score = sum([x for x in cards.pop(i) if not x in marked]) * n
            silver = silver or score
            gold = score

print(silver, gold)
