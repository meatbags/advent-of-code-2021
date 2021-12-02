data = open('./data/2.txt').read().strip().split('\n')

# p1
hor, ver = 0, 0
for row in data:
    val = int(row.split(' ')[1])
    hor += val if row[0] == 'f' else 0
    ver += 0 if row[0] == 'f' else (val * (-1 if row[0] == 'u' else 1))
print(hor * ver)

# p2
hor, ver, aim = 0, 0, 0
for row in data:
    val = int(row.split(' ')[1])
    aim += 0 if row[0] == 'f' else (val * (-1 if row[0] == 'u' else 1))
    hor += val if row[0] == 'f' else 0
    ver += aim * val if row[0] == 'f' else 0
print(hor * ver)
