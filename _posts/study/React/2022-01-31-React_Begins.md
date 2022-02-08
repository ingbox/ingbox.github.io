---
layout: single
title: "React - 환경 설정 2(2/?)"
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

### 단방향 Data Binding

### 가상 DOM

### 가독성

### 재사용성

### 유지보수 편리

## 디렉토리 구조

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
