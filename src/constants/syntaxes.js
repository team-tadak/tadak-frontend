export const SYNTAXES = {
  Python: [
    {
      title: '기본 입력 및 출력',
      level: 1,
      example: (
        <p>
          import random
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;print("name?")
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;name = input()
        </p>
      ),
      summary: 'print( ) 와 input( ) 등 기본적인 입출력 함수가 활용됩니다. ',
    },
    {
      title: 'if~elif~else 조건문',
      level: 2,
      example: (
        <p>
          if year % 4 == 0:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(year)
          <br />
          elif year % 8 == 0:
        </p>
      ),
      summary: '파이썬에서 조건에 따라 다른 명령을 실행할 때 사용하는 if, elif 문을 이용합니다. ',
    },
    {
      title: '반복문과 배열',
      level: 3,
      example: (
        <p>
          langs = ['python']
          <br />
          for l in langs:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if l in a:
        </p>
      ),
      summary: 'in 키워드를 활용하여 배열의 각 항목이 존재하는지 확인하는 문법을 이용합니다. ',
    },
    {
      title: '재귀함수',
      level: 4,
      example: (
        <p>
          def f(n):
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if nterms = 0: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return f(n-1)
        </p>
      ),
      summary: '재귀함수를 이용하여 피보나치 함수로 타자연습을 합니다. ',
    },
    {
      title: '파일 입출력',
      level: 5,
      example: (
        <p>
          f1 = open('s.txt')
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;f1.close()
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;f2.close()
        </p>
      ),
      summary: '텍스트 파일의 내용을 불러와 작업을 수행합니다!',
    },
    {
      title: '클래스 정의',
      level: 6,
      example: (
        <p>
          class Caculator:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def __init__: <br />
          &nbsp;&nbsp;&nbsp;&nbsp;def add(self):
        </p>
      ),
      summary: 'OOP 의 꽃! Class 문법으로 타자연습을 합니다!',
    },
  ],
  C: [
    {
      title: 'Hello world!',
      level: 1,
      example: (
        <p>
          #include &lt;stdio.h&gt;
          <br />
          int main() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("Hello..
        </p>
      ),
      summary: '가장 먼저 해야 할 일! Hello, world 출력하기!',
    },
    {
      title: '숫자 출력',
      level: 2,
      example: (
        <p>
          int age = 43;
          <br />
          printf("%d", &age);
          <br />
          return 0;
        </p>
      ),
      summary: '변수에 저장된 값을 printf( ) 함수를 통해 출력하기',
    },
    {
      title: '반복문',
      level: 3,
      example: (
        <p>
          int i = 0;
          <br />
          for (i = 0; i ...)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf(...);
          <br />
        </p>
      ),
      summary: 'for 문을 이용해서 반복적인 작업을 할 수 있습니다!',
    },
    {
      title: 'if~else if~else 조건문',
      level: 4,
      example: (
        <p>
          if (value &gt; 0)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;printf("pos");
          <br />
          else if(value &lt; 0)
        </p>
      ),
      summary: '조건문을 통해 조건에 따라 다른 명령어를 실행해 봅시다!',
    },
    {
      title: '재귀함수',
      level: 5,
      example: (
        <p>
          int sum(int k) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if (k &gt; 0)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return k ...;
        </p>
      ),
      summary: '함수 안에 또 함수 호출이! 재귀함수로 타자연습하기!',
    },
    {
      title: 'switch 구문',
      level: 6,
      example: (
        <p>
          switch (day) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;case 1:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;...
        </p>
      ),
      summary: '분기문이 많아지면 switch 도 써볼 수 있죠!',
    },
  ],
  Html: [
    {
      title: '나의 첫 웹페이지!',
      level: 1,
      example: (
        <p>
          &lt;h1&gt;Hello...&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This...&lt;/p&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src=... /&gt;
        </p>
      ),
      summary: '내 첫 웹페이지를 만들어 보아요! 제목과 이미지를 넣어봅시다',
    },
    {
      title: 'HTML 보일러플레이트 코드',
      level: 2,
      example: (
        <p>
          &lt;meta charset... /&gt;
          <br />
          &lt;meta http-equiv...
          <br />
          &lt;meta name=...
        </p>
      ),
      summary: 'emmet 의 기본 보일러플레이트 코드를 따라 쳐 봅시다!',
    },
    {
      title: 'CSS class 적용하기!',
      level: 3,
      example: (
        <p>
          &lt;div class=...&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Japan&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Tokyo...
        </p>
      ),
      summary: 'class 를 이용하여 CSS 스타일을 적용하는 문법입니다!',
    },
    {
      title: '영상 넣어보기!',
      level: 4,
      example: (
        <p>
          &lt;video autoplay...
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;source src=...
          <br />
          &lt;/video&gt;
        </p>
      ),
      summary: 'HTML video 태그를 이용하여 영상을 넣어봅시다!',
    },
    {
      title: 'form 으로 데이터 전송하기',
      level: 5,
      example: (
        <p>
          &lt;form action=...
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type=...
          <br />
          &lt;/form&gt;
        </p>
      ),
      summary: 'HTML form 태그로 서버로 데이터를 전송해봅시다!',
    },
    {
      title: '표 만들어 보기!',
      level: 6,
      example: (
        <p>
          &lt;table border="1"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;...
        </p>
      ),
      summary: '복잡한 태그 구조로 어려울 수 있는 표를 만들어봅시다!',
    },
  ],
};
