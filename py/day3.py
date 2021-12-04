import time

t1 = time.time()

raw = open('./data/bb3.txt').readlines()
data = [int(x, 2) for x in raw]
n = len(raw[0].strip())

# SILVER
#test = lambda d, i: sum(1 for x in d if 1 << i & x) >= len(d) / 2
def test(d, i):
    half = len(d)/2
    n = 0
    check = 1 << i
    for x in d:
        if check & x:
            n += 1
            if n >= half:
                return True
    return n >= half

a = sum(1 << i if test(data, i) else 0 for i in range(n))
b = (1 << n) - 1 ^ a
p1 = a * b

t2 = time.time()

# GOLD
a, b = data, data
f = lambda d, bit: lambda x : (1 << i & x > 0) == bit
for i in range(n-1, -1, -1):
    a = list(filter(f(a, test(a, i)), a)) if len(a) > 1 else a
    b = list(filter(f(b, not test(b, i)), b)) if len(b) > 1 else b
p2 = a[0] * b[0]

t3 = time.time()

print('p1', p1, t2 - t1, 's')
print('p2', p2, t3 - t2, 's')
