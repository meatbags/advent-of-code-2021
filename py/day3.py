raw = open('./data/3.txt').readlines()
data = [int(x, 2) for x in raw]
n = len(raw[0].strip())

# check "1" bit is dominant
test = lambda data, i: sum(1 for x in data if 1 << i & x) >= len(data) / 2

# SILVER
a = sum(1 << i if test(data, i) else 0 for i in range(n))
b = (1 << n) - 1 ^ a
silver = a * b

# GOLD
a, b = data, data
filter_func = lambda bit: lambda x : (1 << i & x > 0) == bit
for i in range(n-1, -1, -1):
    a = list(filter(filter_func(test(a, i)), a)) if len(a) > 1 else a
    b = list(filter(filter_func(not test(b, i)), b)) if len(b) > 1 else b
gold = a[0] * b[0]

print(silver, gold)
