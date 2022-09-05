---
layout: single
title: "React - 시작하기 앞서"
categories:
  - react
---

<style>
img.aligncenter{display:block;margin:0 auto}
  </style>

## 서론

이전 포스팅인 [React - 환경설정](https://ingbox.github.io/react/React_Setting/)에서 부족한 부분을 보충하려고 한다.<br>
앞서 말했던 React의 특징과 [[생활코딩]](https://www.youtube.com/channel/UCvc8kv-i5fvFTJBFAk6n1SA) 유튜브 영상을 참고하기 때문에<br>
개인적인 추가 환경 설정을 포스팅 하려고 한다.<br>


## 시작하기 앞서

<span id="mus">기초지식</span>에 대해서 알고 가자.<br>
React는 JavaScript 기반으로 만들어진 프레임워크로<br>
아래의 내용은 JavaScript 기초를 정리한 것이다.<br>

### 자바스크립트 BOM

<daon> " 브라우저 객체모델, 브라우저를 제어하기 위한 인터페이스 "</daon>
<br>
window : 브라우저 창(생략 가능)<br>
✏️`window.open('https://www.google.com')// 새탭 열기`

document: 현재 문서(DOM 객체)에 대한 정보

history: 현재 브라우저가 이전에 접근했던 URL history 제어<br>
✏️`history.back() // 뒤로가기`

location: 문서의 주소와 관련된 객체, 문서 URL 변경, 문서의 위치와 관련한 정보 획득 가능<br>
✏️`location.host // 홈페이지 host 주소 가져옴`

screen: 사용자 디스플레이 화면에 대한 다양한 정보<br>
✏️`console.dir(screen) // 사용자 디스플레이 정보 출력`

navigator: 실행중인 브라우저에 대한 정보<br>
✏️`navigator.appName // 브라우저 이름`<br>
✏️`navigator.geolocation.getCurrentPostition(Callback)// 위치 정보 출력`

### Script 로드

1️⃣ `<body>` <span id="mus">맨 끝에 선언하여 script 내에서 DOM에 접근할 시 에러가 없도록</span>

```html
<body>
  <script>
    document.querySelector('#btn'); // Null
  </script>

  <button id="btn"></button>

  <script>
    document.querySelector('#btn'); // OK
  </script>
</body>
```
<br>
2️⃣ `onload` <span id="mus">이벤트 안에 script에서 동작할 코드를 모두 넣음</span><br>
HTML 파싱 DOM 생성과 외부 컨텐츠가 로드가 완료되면 실행되는 코드

```html
<body>
  <script>
    window.onload = function() {
      document.querySelector('#btn'); // OK
    }
  </script>

  <button id="btn"></button>


</body>
```
<br>
3️⃣ <span id="mus">DOMContentLoaded</span><br>
DOM 요소만 로드되면 바로 실행 onload보다 빠름

```html
<body>
  <script>
    document.addEventListener('DOMContentLoaded',function() {
      document.querySelector('#btn'); // OK
    });
  </script>

  <button id="btn"></button>


</body>
```
<br>

4️⃣ <span id="mus">HTML5 이상에서 script 태그 내의 defer을 선언</span><br>
HTML 파싱과 함께 비동기로 js파일을 불러옴<br>
HTML 파싱이 끝나면 바로 script 실행<br>
```html
<head>
  <script src="./main.js" defer></script>
</head>
<body>
  <button id="btn"></button>
</body>
```
<font size="2">🚨defer이 주로 사용되니까 권장</font>
<br>


5️⃣ <span id="mus">HTML5 이상에서 script 태그 내의 async을 선언</span><br>
HTML 파싱이 완료되지 않더라도 JavaScript 파일 실행<br>
HTML 파싱과 js파일 불러오기를 동시에 실행하고 js를 불러오면 js를 바로 실행<br>
Script 실행 중에는 HTML 파싱이 멈춤<br>
```html
<head>
  <script src="./main.js" async></script>
</head>
<body>
  <button id="btn"></button>
</body>
```
<br>

### 대망의 this

> * 객체를 가르기는 키워드
> * this가 어떤 객체???
> * 호출한 대상이 this!!!

1️⃣ 호출한 대상이 없으면 `this`는 전역 객체인 `window`가 됨!!<br>

```js
  let person = {
    fullname: '잉브',
    age: '26',
    printThis: function() {
      console.log(this);
    }
  }
  person.printThis(); // printThis Function을 호출한 대상이 person이기 때문에 이때 this는 person이다
  printThis(); // window === this이다
```

2️⃣ 콜백함수 안에서 this가 btn으로 설정됨<br>


```js
  let btn = document.querySelector('button');

  btn.addEventListener('click', function() {
    console.log(this); // <button> 버튼 </button>
  })
```

3️⃣ ES5 이상부터 bind로 this를 변경할 수 있음<br>

```js
  let btn = document.querySelector('button');

  btn.addEventListener('click', function() {
    console.log(this); // <button> 버튼 </button>
  })
```

```js
  let pokemon = {
    id: '1',
    name: '이상해씨',
    damage: 15,
    attack: function() {
      // console.log(this); // *pokemon
      setTimeout((function() {
        console.log(this.name, '가 공격하였습니다');
        console.log(this.damage, '의 데미지를 입혔습니다');
      }).bind(this), 2000); // *window => pokemon으로 변경
    },
  };
```

<font size="2">🚨bind는 단 한번만 사용할 수 있음</font>

4️⃣ Arrow Function(화살표 함수)를 사용하면 상위 스코프에서 this를 물려받음<br>

```js
  let pokemon = {
    id: '1',
    name: '이상해씨',
    damage: 15,
    attack: function() {
      setTimeout(() => {
        console.log(this);
      }, 2000);
    },
  };

  person.attack();
```

5️⃣ Arrow Function가 나오기 전에는 this를 다른 변수에 넣어서 사용<br>

```js
  let pokemon = {
    id: '1',
    name: '이상해씨',
    damage: 15,
    attack: function() {
      let that = this;
      setTimeout(() => {
        console.log(that.name); // OK
      }, 2000);
    },
  };

  person.attack();
```

6️⃣ Strict 모드에서는 호출한 것이 없으면 undefined가 나옴<br>

### 이벤트 Capturing(캡처링) & Bubbling(버블링)
<br>
![](/assets/images/posting/react_220131/picture5.jpg){:.aligncenter}
<br>

<daon> " 캡처링은 body -> div -> button으로 호출,<br>
버블링은 button -> div -> body로 전달 "</daon>

1️⃣ Capturing & Bubbling 확인

```js
  ...// 각 tag들을 querySelector 로 불러옴

  // Capturing
  $btn.addEventListener('click', function() {
    console.log('button 호출');
  }, true);

  $div.addEventListener('click', function() {
    console.log('div 호출');
  }, true);

  $body.addEventListener('click', function() {
    console.log('body 호출');
  }, true);
  // 클릭 후에 Capturing으로 하나씩 호출되는 것을 볼 수 있음
  // body -> div -> button

  //Bubbling
  $btn.addEventListener('click', function() {
    console.log('button 호출');
  });

  $div.addEventListener('click', function() {
    console.log('div 호출');
  });

  $body.addEventListener('click', function() {
    console.log('body 호출');
  });

  // 클릭 후에 Bubbling으로 하나 씩 호출되는 것을 볼 수 있음
  // button -> div -> body
```

2️⃣ Event.eventPhase를 통해 확인하면 이벤트 흐름 단계 확인 가능

> Event.CAPTURING_PHASE(1) : Capturing State일 때는 1를 반환
> Event.CAPTURING_TARGET(2) : Target에 도달했을 때는 2를 반환
> Event.BUBBLING_PHASE(3) : Bubbling State일 때는 3을 반환

```js
  $body.addEventListener('click', function(event) {
    console.log(event.eventPhase); // 3
  });
```

3️⃣ Capturing & Bubbling을 막아보자

```js
  // Capturing
  $span.addEventListener('click', function(event) {
    event.stopPropagation(); // 이후에 버블링을 Stop
  });
```


```js
  //Bubbling
  $span.addEventListener('click', function(event) {
    event.stopPropagation(); // 이후에 버블링을 Stop
  });
```

4️⃣ 추가로 event.preventDefault()를 알아보자

```js
  const $a = document.querySelector('a');
  $a.addEventListener('click', function(event) {
    event.preventDefault();
  })
```
<font size='2'>$(앵커태그) 또는 submit 이벤트를 막을 때 주로 사용</font>

## 시작해보자

<span id="mus">React</span>는 아래와 같은 특징이 있다. 

* JSX
* Component
* 단방향 Data Binding
* 가상 DOM
* 가독성
* 재사용성
* 유지보수 편리


### JSX

보이는 것과 같이 Function 또는 Class가 HTML을 감싸고 있는 코드가 JSX 코드이다.<br>

```jsx
class App extends Component{
  render() {
    return(
      <div className="App"> Hello, React!!! </div>
    );
  }
}
```

* FaceBook에서 웹을 조금더 쉽게 개발하기 위해서 개발한 코드
* HTML 태그를 변수로 할당하고, 호출하고, 리턴 가능
* JSX로 작성한 코드는 Create-React-App이 자동으로 Javascript로 Convert해 줌
* JSX(ES6)는 브라우저 ES5 버전에서는 지원✖️, 바벨(Babel)을 통해 변환해주는 과정이 필요
* 최하위 태그 바깥에 무조건 1개 이상의 부모 태그가 필요함

<font size=2> ES6 버전을 지원하는 브라우저는 구글에 찾아보면 있으니 구글링을 해보기 바란다.</font>

### Component

React를 사용하는 가장 큰 이유는 <span id="mus">Component</span> 기능 때문이다.<br>

```jsx
class Subject extends Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component{
  render() {
    return(
      <div className="App">
        <Subject></Subject>
        Hello, React!!
      </div>
    );
  }
}
```
<br>
파일 중 <u>App.js</u>에서 <span id="mus">Component</span>를 생성한다.<br>
위의 코드 중 `class Subject extends Component`는<br>
React에서 제공하는 <span id="mus">Component</span>를 상속받아서<br>
Subject라는 이름의 <span id="mus">Component</span>를 생성하겠다고 선언한 것이다.

![](/assets/images/posting/react_220131/picture3.png){:.aligncenter}

1줄의 Subject 태그로 4줄의 header 태그를 대신하였다.<br>
그렇기에 Component를 쓰면 가독성을 높일 수 있다.<br>

![](/assets/images/posting/react_220131/picture4.png){:.aligncenter}

브라우저가 해석할 때에는 header가 포함된 상태로 Compile이 완료된 것을 볼 수 있다.<br>
반면 Subject는 찾아볼 수 없다. 즉 브라우저로 넘어오기 전에 

### 자바스크립트 BOM 이란?

생성한 App의 디렉토리 구조를 살펴보면 크게 <span id="mus">public</span>과 <span id="mus">src</span>로 나눌 수 있다.<br>
<span id="mus">public</span>은 `index.html` 파일이 있고 생성한 Component를 `id="root"`인 태그 안에 삽입한다.<br>

![](/assets/images/posting/react_220131/picture1.png){:.aligncenter}

그리고 우리가 코딩할 부분은 대게 <span id="mus">src</span> 폴더 내 파일에서 이뤄진다.<br>

![](/assets/images/posting/react_220131/picture2.png){:.aligncenter}

그리고 디자인을 담당하는 <span id="mus">CSS</span>는 src 폴더 안에 <u>index.js</u>를 보면 `import './index.css'`이 있을것이다.<br>
`index.css` 이곳을 바꾸면 원하는 스타일을 적용 시킬 수 있다. <br>
<u>App.css</u> 파일도 볼 수 있는데 이곳은 App.js에서 로드되는 파일이므로<br> 전체적인 CSS를 담당하는 부분은 아니고 App.js 내의 스타일만 담당한다.<br>
그래서 CSS 적용 시 우선순위를 잘 매겨야할 것 같다.<br>


## 추가 환경 설정

단순히 <u>App.js</u>에서 Function으로 된 것을 Class로 변경해주었다.

```jsx
class App extends Component{
  render() {
    return(
      <div className="App">
        <header className="App">
          <img src= {logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
```

<font size=2>강의에서 이렇게 진행된다고 해서 바꿨다.</font>


## 마무리

배우면서 계속 내용을 추가할 예정입니다.
