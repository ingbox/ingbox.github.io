---
layout: single
title: "React - 포켓몬도감(2)"
categories:
  - react
---

<style>
img.aligncenter{display:block;margin:0 auto}
</style>

## 서론

[[React Github 주소]](https://github.com/ingbox/React_poke_Util)

<h3>화살표 함수</h3>

![](/assets/images/posting/react_220321/picture1.png){:.aligncenter}
<figcaption> [그림 1] 화살표 함수</figcaption>
<br>

오늘은 React의 `() =>` 함수 형태를 왜 사용하는 지에 대해서 알아보려고 한다.<br>
Item과 자동으로 매핑처리가 된다고 하는데 어떤 방식으로 매핑이 되는지도 궁금하다.<br>

예를 들어, 함수 선언부에 아래의 모양을 볼 수 있을 것이다.<br>
우리가 알던 모양과는 함수의 생김새가 다르다...<br>

```js
callApi = async() => {
    const response = await fetch('/api/pokemon');
    const body = await response.json();
    return body;
  }
```

## 시작해보자
### 화살표 함수
<br>
기본 함수 표현법은 아래와 같다.<br>

```js
let add = (par1, par2) => {
  return par1 + par2;
}
```

해석하자면, () 안에는 파라미터를 {} 안에는 반환값을 적어주면 된다.<br>
또한 매개변수가 하나라면 ()를 생략할 수 있다.<br>

```js
let show = par1 => {
  return par1;
}
```


### 특징

* bind() 함수를 따로 사용할 필요가 없음
* 계단형 함수 선언과 같은 구조를 피할 수 있음
* stateless 함수형 컴포넌트

<br>
**첫번째** 특징인 <span id="mus">bind() 함수를 따로 사용할 필요가 없음</span>은<br>
화살표 함수는 객체의 메소드 형태로 호출될 시에<br> 
해당 객체 인스턴스를 자동으로 참조하기 때문에 this.bind()를 써주지 않아도 된다.

> 콜백 함수(Callback 함수란?)<br>
> 개발자가 선언을 해두고, 어떤 이벤트가 발생하거나 시점에 도달했을 때 시스템에서 호출하는 함수

<br>

**두번째** 특징인 <span id="mus">계단형 함수를 피할수 있는 것</span>은<br>
return을 화살표로 대체할 수 있기 떄문에 가능하다.<br>


```js
function addNumber(num) {
  return function (value) {
    return num+value;
  };
}
```
```js
let addNumber = num => value => num + value;  
```

<br>
**세번째** 특징인 <span id="mus">stateless 함수형 컴포넌트</span>은<br>
화살표 함수를 이용하여 컴포넌트를 선언하게 되면 간결해진 대신에<br>
컴포넌트 라이프 사이클을 활용하지 못한다는 점이 문제지만<br>
이를 해결하기 위해서 나온 것이 바로 Hooks의 개념이다.<br>

```js
const HelloWorld = (props) => {
  return <h1>{props.hello}</h1>;
}
```

### let & const

React에서 사용되는 변수 선언에 대해서도 알아보려고 한다.<br>
JavaScript에서의 var 키워드는 전역에 선언하여 문제를 일으키곤 했다.<br>
React의 버전인 ES6에선 이를 해결하기 위해 <span id="mus">let</span>과 <span id="mus">const</span>를 도입했다.<br>


&nbsp;&nbsp; <daon> " const 변수 선언 후 값을 바꿀 수 없음, let은 바꿀 수 있음 " </daon><br>

이 가장 큰 차이점이다. 또한 모두 지역변수이다.<br>
그렇기에 함수 밖에서는 호출이 불가능하다.<br>


## 마무리

참고한 페이지

[[Bora Lee님 페이지: React를 배우기 전에 알아야 할 자바스크립트 기초]](https://violetboralee.medium.com/react%EB%A5%BC-%EB%B0%B0%EC%9A%B0%EA%B8%B0-%EC%A0%84%EC%97%90-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-javascript%EA%B8%B0%EC%B4%88-e0665f8cbee0) <br>

[[코딩하는 휘제님 페이지: [react,javascript] 화살표 함수를 알아보자 (arrow function)]](https://coding-hwije.tistory.com/30)

