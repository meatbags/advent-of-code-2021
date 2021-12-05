data = [[int(x) for x in row.replace(' -> ', ',').split(',')] for row in open('./data/5.txt').readlines()]
silver = {}
gold = {}

def line(graph, x1, y1, x2, y2):
    dx = 0 if x1 == x2 else (1 if x2 > x1 else -1)
    dy = 0 if y1 == y2 else (1 if y2 > y1 else -1)
    while x1 != x2 + dx or y1 != y2 + dy:
        key = str(x1) + ',' + str(y1)
        graph[key] = 1 if not key in graph else graph[key] + 1
        x1 += dx
        y1 += dy

for row in data:
    x1, y1, x2, y2 = row
    line(gold, x1, y1, x2, y2)
    if x1 == x2 or y1 == y2:
        line(silver, x1, y1, x2, y2)

print(sum([1 for key in silver if silver[key] > 1]))
print(sum([1 for key in gold if gold[key] > 1]))
