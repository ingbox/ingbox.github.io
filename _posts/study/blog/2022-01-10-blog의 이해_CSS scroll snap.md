---
layout: single
title: "Blog - CSS scroll snap"
categories:
  - blog
---

## 서론
CSS Scroll Snap 에 대해서 알아보자. 간단히 어떻게 생겨먹은 녀석인지 예제로 살펴보자.

<div class="holster">
<div class="container y mandatory-scroll-snapping">
  <div>hello</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
</div>

<style>

.holster {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}

.container {
  display: flex;
  overflow: auto;
  flex: none;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory; /* 항상 스냅 */
}

.container > div { /* div의 속성 */
  text-align: center;
  scroll-snap-align: center; /* snap area 안에서 center에 맞게 snap */
  flex: none; /* 컨테이너에 관계 없는 size */
}

.y.container > div { /* div의 크기 */
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%; /* 컨테이너의 100% 겠지 */
}

/* appearance fixes */
.y.container > div:first-child {
 /* 행간 조절 */
  font-size: 30px;
}
/* coloration */
.container > div:nth-child(even) { /* 짝수 div */
  background-color: #87EA87;
}

.container > div:nth-child(odd) { /* 홀수 div */
  background-color: #87CCEA;
}
</style>

<br>

이렇게 차지하는 정도에 따라 어디에 초점이 맞춰질 지 결정되는 속성이다. <br>
이를 참고해서 나는 Fullpage 웹을 구현해보고자 한다. Apple 홈페이지를 모바일로 접속하면 느낌이 올 것이다.  


## 구현해보기

```html
<h2 id="item-1" class="item">첫번째 섹션</h2>
  <img src="이미지 링크">

<h2 id="item-2" class="item">두번째 섹션</h2>
  <img src="이미지 링크">

<h2 id="item-3" class="item">세번째 섹션</h2>
  <img src="이미지 링크">

```

```css
<style>
html {
    scroll-snap-type:y;
}

.item {
    scroll-snap-align:start;
}
</style>
```

<h2 id="item-1" class="item">첫번째 섹션</h2>
  <img src="/assets/images/posting/blog_snap/picture1.jpg">

<h2 id="item-2" class="item">두번째 섹션</h2>
  <img src="/assets/images/posting/blog_snap/picture1.jpg">

<h2 id="item-3" class="item">세번째 섹션</h2>
  <img src="/assets/images/posting/blog_snap/picture1.jpg">

<style>
html {
    scroll-snap-type:y;
}

.item {
    scroll-snap-align:start;
}
</style>

## 정리하기

정말 간단하게 한번 구현해 보았다. Heading 표시인 h2가 페이지의 기준이 되는 경우가 대다수이므로 h2를 기준으로 `item` class를 선언해 주고 h2의 start부분에 snap이 되도록 설정하였다. 위의 섹션에 스크롤을 해보자

<br>

## 마무리
[Mozilla 개발자 홈페이지](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)를 참고하였습니다. 오늘은 토익 공부와 가사 번역도 할 예정이기 때문에 간단히 마친다. 차후에 더 추가할 내용이 있으면 추가할 것이다. 

<font size=2>"가사 번역을 올리려고 했는데, 찾아보니 저작권 침해라고 한다... 그냥 나만의 일기장에
번역하는걸로 ㅠㅠ"</font>