---
layout: single
title: "Blog - CSS Animation"
categories:
  - blog
---

<style>

.inner {
  width: 200px;
  height: 200px;
  background-color: red;
}

.outer {
  justify-content: center;
  display: flex;
}

.inner_1 {
  width: 200px;
  height: 200px;
  background-color: red;
  animation-name: change_color;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 2s;
  animation-iteration-count: 3;
}

.outer_1 {
  justify-content: center;
  display: flex;
}

@keyframes change_color {
  from { background-color: red; }
  to { background-color: blue; }
}

.inner_2 {
  width: 200px;
  height: 200px;
  background-color: red;
  animation-name: change_color2;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-delay: 2s;
  animation-iteration-count: 3;
} 

.outer_2 {

  justify-content: center;
  display: flex;

}

@keyframes change_color2 {
  0% { background-color: red; }
  50% { background-color: green; }
  100% { background-color: blue; }
}

.outer_3 {
  width: 400px;
  height: 400px;
  display: flex;
}

.inner_3 {
  width: 200px;
  height: 200px;
  background-color: red;
  animation-duration: 4s;
  animation-name: change_xy;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  animation-iteration-count: 3;
}


@keyframes change_xy {
  0% {  }
  25% { margin: 0 0 0 200px; }
  50% { margin: 200px 0 0 200px; }
  75% { margin: 200px 0 0 0; }
  100% { margin: 0; }
}

.outer_4 {
  width: 400px;
  height: 400px;
  display: flex;
}

.inner_4 {
  width: 200px;
  height: 200px;
  background-color: red;
}

.wrapper:hover .inner_4 {
  animation: change_xy 4s 0.1s 2 ease-in forwards normal;
}


</style>



## 서론

오늘은 CSS Animation에 대해서 알아보자. 웹에 접속했을 때 화면이 현란하게 움직이는 것을 본 적이 있을 것이다.<br>
예를 들어, [스타벅스 공식 홈페이지](https://www.starbucks.co.kr/index.do)에 들어가서 보면 이미지가 뿅뿅하고 튀어나오는 것을 볼 수 있다.<br>
이렇게 화면에 자동으로 나타나는 움직임들을 <u>Animation</u>이라고 한다.<br>
그리고 반응형으로 커서가 올라가거나 클릭하면 동작하는 것을 <u>Transition</u>이라고 한다.<br>
이번 시간에는 Animation에 대해 살펴보자. 꽤나 흥미롭다.😝

<span style="color:red">아래 글부터는 개조식으로 작성됩니다.</span>


##  1. 색상 변화 Animation

<br>

```css
.object {
  width: 200px;
  height: 200px;
  background-color: red;
}
```
<br>

<div class="outer">
  <div class="inner">

  </div>
</div>

<br>

### Change Color 선언

```css
.object {
  width: 200px;
  height: 200px;
  background-color: red;
  animation-name: change_color;
  animation-duration: 2s; /* Animation 총 시간 */
  animation-delay: 2s; /* 몇 초 뒤에 Animation을 시작할 지 */
  animation-iteration-count: 3; /* Animation을 몇 번 반복할지 */
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
}

@keyframes change_color {
  from { background-color: red; }
  to { background-color: blue; }
}
```

<br>

<div class="outer_1">
  <div class="inner_1">

  </div>
</div>

<br>

* `animation-name: change-color`에서 `change-color`가 할 동작에 대해서는 따로 선언해줘야 함
* `@keyframes`는 Animation의 중간 중간의 특정 지점을 거칠 수 있는 키프레임을 설정하여 제어할 수 있게 함 
* `animation-fill-mode`는 Animation이 끝난 후 어떻게 할지를 지정

|속성 값|의미|
|:-----:|:-----:|
|**none**|Animation이 끝난 후 상태를 설정하지 않음|
|**forwards**|Animation이 끝난 후 그 지점에 그대로 있음|
|**backwards**|Animation이 끝난 후 시작점으로 돌아옴|
|**both**|Animation이의 앞 뒤 결과를 조합하여 설정|
|**inherit**|Animation의 상태를 상위 요소한테 상속받음|

<br>

* `animation-timing-funtion`은 애니메이션에 가속을 주는 태그

|속성 값|의미|
|:-----:|:-----:|
|**ease-in**|Animation이 끝날 때 느려짐|
|**ease-out**|Animation이 빠르게 시작했다가 점점 느려짐|
|**ease-in-out**|Animation을 둘 다 적용|

<br>
`@keyframe` 부분을 %를 사용해서 나타낼 수도 있음

```css
@keyframes change_color {
  0% { background-color: red; }
  50% { background-color: green; }
  100% { background-color: blue; }
}
```
<br>

<div class="outer_2">
  <div class="inner_2">

  </div>
</div>

<br>


##  2. 위치 이동 Animation
### 2.1 Change_xy 선언

```css
.object {
  width: 200px;
  height: 200px;
  background-color: red;
  animation-name: change_xy;
  animation-duration: 4s;
  animation-delay: 2s;
  animation-iteration-count: 3;
  animation-fill-mode: forwards;
  animation-direction: normal;
}

@keyframes change_xy {
  0% {  }
  25% { margin: 0 0 0 200px; }
  50% { margin: 200px 0 0 200px; }
  75% { margin: 200px 0 0 0; }
  100% { margin: 0; }
}

```
<br>

<div class="outer_3">
  <div class="inner_3">

  </div>
</div>

* `animation-direction`은 Animation의 방향을 설정

|속성 값|의미|
|:-----:|:-----:|
|**normal**|정방향|
|**reverse**|역방향|
|**alternate**|정방향 후 역방향(2번 이상 반복 시)|
|**alternate-reverse**|역방향 후 정방향(2번 이상 반복 시)|

<br>

* `animation` 속성 한 줄로 표시도 가능

```css
animation: animation-name | animation-duration | animation-delay | animation-iteration-count
| animation-timing-function | animation-fill-mode | animation-direction; 

/* e.x */
animation: change_xy 4s 0.1s 2 ease-in forwards normal;
```

### 2.2 반응형 위치 이동 Animation

hover 속성을 통해 마우스가 객체에 올라갔을 경우 동작하도록 함

```css
.object {
  width: 200px;
  height: 200px;
  background-color: red;
}

/* object가 차지하는 공간을 이동중에 벗아나기 때문에 감싸는 클래스를 선언해 준 뒤 hover을 적용해야 함 */

.wrapper:hover .photo {
  animation: change_xy 4s 0.1s 2 ease-in forwards normal;
}
```

<br>

<div class="outer_4">
  <div class="wrapper">
    <div class="inner_4">

    </div>
  </div>
</div>


<style>

.outer_5 {
  width: 641px;
  height: 400px;
  background-image: url("/assets/images/posting/blog_animation/grass.png");
  display: flex;
  flex-direction: column;
}

.inner_5 {
  width: 95%;
  height: 95%;
  background-image: url("/assets/images/posting/blog_animation/pokemon_appear.png");
  background-size: contain;
  background-repeat: no-repeat;
  position : relative;
  bottom : -50px;
  left: 18px;
  opacity: 0;
}

.outer_5 img {
  margin-top: 30px;
  width: 178px;
  height: 159px;
  display: block; 
  margin: 0px auto;
  position: relative;
  top: 30px;
  opacity: 0;
}

.outer_5:hover img {
  animation: change_opacity 1.5s 0.1s 1 ease-in forwards normal;
}

.outer_5:hover .inner_5 {
  animation: change_opacity 1.5s 0.1s 1 ease-in forwards normal;
}

@keyframes change_opacity {
  0% {
		opacity : 0;
	}
	100% {
		opacity : 1;
	}
}

.inner_5 p {
  position: relative;
  color: black;
  font-size: x-large;
  top: 27px;
  left: 25px;
}

</style>

## 실습
지금까지 배운것을 토대로 귀여운 애니메이션을 만들어 보자

<div class= "outer_5">
  <img src="/assets/images/posting/blog_animation/kurby.png" />
  <div class= "inner_5">
    <p class="typing-txt">야생의 커비가 나타났다!!!</p>
    <p class="typing"></p> 
  </div>
</div> 

<!-- <script>

var typingBool = false; 
var typingIdx = 0;
var typingTxt = $(".typing-txt").text();
typingTxt = typingTxt.split("");

if(typingBool==false){ 
       typingBool=true; 
       var tyInt = setInterval(typing,100); 
     }
     
function typing(){ 

  if( typingIdx < typingTxt.length )
  {
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
    } else {
      clearInterval(tyInt);
    }
}

</script> -->


## 마무리

내용은 [Rock's Easyweb Youtube](https://www.youtube.com/watch?v=8eIOAPbguew)를 참고하였습니다.<br>
해당 내용은 상기 블로그의 내용을 재구성하기 보다는 제가 이해하기 위해 정리한 것입니다.<br>
더 자세한 내용은 해당 링크에 있으니 참고해주시면 감사하겠습니다. <br>
그리고 CSS 속성 값들은 해당 속성을 Google에 검색하면 매우 자세히 나옵니다.<br>
더 많은 요소들을 보고 싶다면 꼭 참고해주세요!
