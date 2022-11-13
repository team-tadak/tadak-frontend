export const MOCKUP_STRING = [
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued d",
  "Authors often\nmisinterpret",
  // eslint-disable-next-line no-template-curly-in-string
  "${resetCSS}\n* {\n-webkit-tap-highlight-color: transparent;\nbox-sizing: border-box;\ntransition: background-color 0.2s;\nwill-change: background-color\n}",
  '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>',
  'import random\nprint("Hello! What is your name?")\nmy_name = input()\nnumber = random.randint(1, 20)\nprint("Well, " + my_name + ", I am thinking of a number between 1 and 20.")',
  'year = int(input("Please enter the year:"))\nif year % 4 == 0 and year % 100 != 0:\n    print(year, "is a leap year")\nelif year % 400 == 0:\n    print(year, "is a leap year")\nelse:\n    print(year, "is not a leap year")',
  `'languages = ['python', 'perl', 'c', 'java']\n\nfor lang in languages:\n    if lang in ['pytohn', 'perl']:\n        print("%6s need interpreter" % lang)\n    elif lang in ['c', 'java']:\n        print("%6s need compiler" % lang)\n    else:\n        print("should not reach here")'`,
  'def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return(fibonacci(n-1) + fibonacci(n-2))\nnterms = int(input("How many Fibonacci do you want?: "))\nif nterms <= 0:\n    print("Error : Please enter a positive number")\nelse:\n    print("Fibonacci: ", end="")\n    for i in range(nterms):\n        print(fibonacci(i), end="")',
  `import random\nf1 = open('score.txt', 'w')\nfor i in range(5):\n    for j in range(5):\n        f1.write(str(random.randint(1, 100)) + ' ')\n    f1.write('\n')\nf1 = open('score.txt', 'r')\nf2 = open('report.txt', 'w')\nwhile True:\n    score = f1.readline()\n    if score == '':\n        break\n    scorelist = score.split()\n    sum = 0\n    for i in range(5):\n        sum += int(scorelist[i])\nf1.close()\nf2.close()`,
  'class Caculator:\n    def __init__(self, first, second):        self.first = first\n        self.second = second\n    def add(self):\n        result = self.first + self.second\n        return result\n    def sub(self):\n        result = self.first - self.second\n        return result\n    def div(self):\n        result = self.first / self.second\n        return result\n    def mult(self):\n        result = self.first * self.second\n        return result',  

];
