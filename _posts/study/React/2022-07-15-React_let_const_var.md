---
layout: single
title: "React(Next.js) - let const var"
categories:
  - react
---

<style>

img.aligncenter{display:block;margin:0 auto; border-radius: 30px;}


</style>

## 서론

![](/assets/images/posting/react_220715/picture1.jpg){:.aligncenter}

오늘은 let, const, var의 정의에 대해서 알아보려고 한다<br>
기초적이지만 꼭 구분해주어야하는 것이기 때문에 다시 정리한다<br>

## 시작해보자

`let`은 

```js
let a = 200;
a = 4;
```
이처럼 바꿀 수 있는 것 변수를 선언해준다음 나중에 바꿀 수 있다<br>

`const`는 상수(constant)라는 뜻인데 우리는 수학식인 x + 1에서 x를 변수,<br>
+1을 상수로 취급한다<br>
즉 x는 변수라 변하는 값인데, +1은 고정값이므로 변하지 않는다<br>
```js
const a = 200;
a = 4; // !TypeError: const 값인데 왜 바꾸려고하십니까??
```
이처럼 `const`로 선언을 해놓으면 변하지 않는 값이 된다<br>
위에서 나온 `let`과 `const`는 ES6가 나오기 이전에는 없었다<br>
오직 `var`만 사용했었다<br>

`var`의 특징으로는

* 변수를 선언해줄 때 값을 넣어주지 않으면 undefined값으로 초기화 됨
* 변수 중복 선언 가능
* 함수 외부에서 선언하면 전역변수 취급

위와 같은 특징은 문제점으로 작용한다<br>
그래서 이를 해결한 것이 `let`과 `const`이다<br>

`let`은 변수 중복선언은 안되고 재할당은 가능하다<br>
즉 같은 이름의 변수는 다시 선언이 불가능하다<br>

`const`는 선언과 초기화를 동시에 진행해주어야한다<br>
즉 선언할 때 `= 값`을 무조건 해주어야한다는 것이다<br>

그리고 블록 레벨 스코프를 따르는데 이는 함수 외부에 있더라도 전역변수 취급하지 않고<br>
그 레벨에서만 그 값이 지역 스코프로 인정되는 것이다<br>

```js
let a = 10;

function(){
  let a = 50;
}

console.log(a); // 10!
```

## 마무리
여전히 포트폴리오를 만드는 중이다<br>
그래도 블로그 작성하는 것을 아예 손 떼버리기에는 그래서 포스팅을 진행한다<br>
지금 react 포트폴리오에 프로젝트에 내가 한 것들을 올려야하는데<br>
생각보다 나를 보여줄 것이 많지 않아서 골머리를 앓고 있다<br>
허허허<br>