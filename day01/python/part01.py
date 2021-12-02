import os.path
with open(os.path.join(os.path.dirname(__file__), 'input.txt')) as f:
    lines = f.read()
    numbers = [int(line) for line in lines.splitlines()]

    # Method 1 
    # count = 0
    # prev=numbers[0]
    # for n in numbers[1:]:
    #     count += n>prev
    #     prev = n

    # Method 2
    # count = 0
    # for i in range(1, len(numbers)):
    #     count += numbers[i] > numbers[i-1]

    # Method 3
    # count = sum(numbers[i] > numbers[i-1] for i in range(1, len(numbers)))
    # print(count) #1184

    print(sum(a<b for a,b in zip(numbers,numbers[1:]))) #1184