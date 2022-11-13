export const MOCKUP_STRING = [
  "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued d",
  "Authors often\nmisinterpret",
  // eslint-disable-next-line no-template-curly-in-string
  "${resetCSS}\n* {\n-webkit-tap-highlight-color: transparent;\nbox-sizing: border-box;\ntransition: background-color 0.2s;\nwill-change: background-color\n}",
  '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>',
  // python
  'import random\nprint("Hello! What is your name?")\nmy_name = input()\nnumber = random.randint(1, 20)\nprint("Well, " + my_name + ", I am thinking of a number between 1 and 20.")',
  'year = int(input("Please enter the year:"))\nif year % 4 == 0 and year % 100 != 0:\n    print(year, "is a leap year")\nelif year % 400 == 0:\n    print(year, "is a leap year")\nelse:\n    print(year, "is not a leap year")',
  `'languages = ['python', 'perl', 'c', 'java']\n\nfor lang in languages:\n    if lang in ['pytohn', 'perl']:\n        print("%6s need interpreter" % lang)\n    elif lang in ['c', 'java']:\n        print("%6s need compiler" % lang)\n    else:\n        print("should not reach here")'`,
  'def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return(fibonacci(n-1) + fibonacci(n-2))\nnterms = int(input("How many Fibonacci do you want?: "))\nif nterms <= 0:\n    print("Error : Please enter a positive number")\nelse:\n    print("Fibonacci: ", end="")\n    for i in range(nterms):\n        print(fibonacci(i), end="")',
  `import random\nf1 = open('score.txt', 'w')\nfor i in range(5):\n    for j in range(5):\n        f1.write(str(random.randint(1, 100)) + ' ')\n    f1.write('\n')\nf1 = open('score.txt', 'r')\nf2 = open('report.txt', 'w')\nwhile True:\n    score = f1.readline()\n    if score == '':\n        break\n    scorelist = score.split()\n    sum = 0\n    for i in range(5):\n        sum += int(scorelist[i])\nf1.close()\nf2.close()`,
  'class Caculator:\n    def __init__(self, first, second):        self.first = first\n        self.second = second\n    def add(self):\n        result = self.first + self.second\n        return result\n    def sub(self):\n        result = self.first - self.second\n        return result\n    def div(self):\n        result = self.first / self.second\n        return result\n    def mult(self):\n        result = self.first * self.second\n        return result', 
  // c
  '#include <stdio.h>\n\n int main(){\n\n    printf(“Hello world” );\n    return 0;\n}',
  '#include <stdio.h>\n\nint main() {\n  int myAge = 43;\n  printf("%p", &myAge);\n  return 0;\n}',
  '#include <stdio.h>\n\nint main() {\n  int i = 0;\n  for (i = 0; i <= 10; i = i + 2) {\n    printf("%d", i);\n  }\n}',
  '#include <stdio.h>\n\nint main() {\n  int integer = 15;\n\n  if(integer > 0) {\n    printf("positive");\n  }\n  else if(integer < 0) {\n    printf("negative");\n  }\n  else {\n    printf("0");\n  }\n}',
  '#include <stdio.h>\n\nint sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  }   else {\n    return 0;\n  }\n}\n\nint main() {\n  int result = sum(10);\n  printf("%d", result);\n  return 0;\n}',
  '#include <stdio.h>\n\nint main() {\n  int day = 4;\n  switch (day) {\n    case 1:\n      printf("Monday");\n      break;\n    case 2:\n      printf("Tuesday");\n      break;\n    case 3:\n      printf("Wednesday");\n      break;\n    case 4:\n      printf("Thursday");\n      break;\n    case 5:\n      printf("Friday");\n      break;\n    case 6:\n      printf("Saturday");\n      break;\n    case 7:\n      printf("Sunday");\n      break;\n  }\n}',
  


  // 'include <stdio.h>\n#include <stdlib.h>\ntypedef struct NODE{\n    int data;\n    struct NODE* next;\n}node;\n\nint main(void) {\n    node* head = (node*)malloc(sizeof(node));\n    head->next=NULL;\n    node* node1 = (node*)malloc(sizeof(node));\n    node1->next = head->next;\n    node1->data = 10;\n    head->next = node1;\n\n    node* node2 = (node*)malloc(sizeof(node));\n    node2->next = node1->next;\n    node2->data = 20;\n    node1->next = node2;\n\n    node* curr = head->next;\n    while(curr != NULL){\n        printf("%d", curr->data);\n        curr = curr->next;    }\n\n    free(head);\n    free(node1);\n    free(node2);\n    return 0;\n}'

  // html
  
];
