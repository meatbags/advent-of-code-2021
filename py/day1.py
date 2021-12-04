# day 1
raw = open('./data/1.txt').read().strip()
data = [int(x) for x in raw.split('\n')]

# p1
print(sum([1 for i in range(1, len(data)) if data[i] > data[i-1]]))

# p2
print(sum([1 for i in range(len(data)-3) if data[i+3] > data[i]]))
