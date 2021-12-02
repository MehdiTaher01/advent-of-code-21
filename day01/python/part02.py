import os.path
with open(os.path.join(os.path.dirname(__file__), 'input.txt')) as f:
    lines = f.read()
    numbers = [int(line) for line in lines.splitlines()]
    #part 2 sliding window algorithm
    print(sum(a<b for a,b in zip(numbers,numbers[3:]))) #1158
