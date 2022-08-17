---
layout: single
title: "Apple Clone_애플 사이트를 따라해보자!"
categories:
  - blog
---

<style>

img.aligncenter{display:block;margin:0 auto; border-radius: 30px;}

</style>

## 서론 

오랜만에 JavaScript 공부해본 것을 복기해볼겸<br>
인프런의 1분코딩님의 강의 Apple Clone을 배워보았다<br>
공부하면서 느낀 것들 그리고 배운 것을 정리해보려고 한다<br>
구현을 모두 했을 때 내것으로 만들어보자😊😊


## 정리해보기

### Image 객체

```js
  let imgElem = new Image();
  imgElem.src = `./img/scene.png`;
```

이미지 객체를 만들어서 이미지를 상황에 맞게 써줄 수 있다<br>
나는 canvas에 이미지를 그리는 처리를 했기 때문에

```js
document.querySelector('#scroll-section-2 #video-canvas-1').getContext('2d')
.drawImage(objs.videoImages[sequence], 0, 0);
```
를 통해 canvas를 불러와서 `drawImage`를 실행시켜 이미지를 그려준다<br>

### calcValues 함수

스크롤 양에 따라 범위의 값을 mapping 하는 함수이다<br>
p5js에 map함수와 비슷하다<br>


> ✏️ `calcValues(values(바꿀 값), currentYOffset(스크롤 값))`<br>
>
> 내부 변수<br>
> `scrollHeight`: 현재 씬에서의 전체 높이<br>
> `scrollRatio` : 현재 씬에서 스크롤 된 비율

![](/assets/images/posting/blog_220817/picture1.jpg){:.aligncenter}

> ✏️ `calcValues(values(바꿀 값), currentYOffset(스크롤 값))`<br>
>
> 내부 변수<br>
> `partScrollStart`: 스크롤 전체 높이 * 시작 시점(%)<br>
> `partScrollEnd` : 스크롤 전체 높이 * 끝 시점(%)

![](/assets/images/posting/blog_220817/picture2.jpg){:.aligncenter}


> ✏️ `calcValues(values(바꿀 값), currentYOffset(스크롤 값))`<br>
>
> 내부 변수<br>
> `rv`: (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];

위의 `rv`를 설명하자면 `(currentYOffset - partScrollStart) / partScrollHeight` 이 부분은<br>
Part(0.33 ~ 0.66) 내에서 얼마나 Scroll 됐는지의 %를 나타낸다<br>
그것을 `(values[1] - values[0])`에 곱하게 되는데 이때 values의 값의<br>
0번째 index는 transition 처리할 값의 시작 값<br>
1번째 index는 transition 처리할 값의 끝 값이다<br>
<span id="mus">즉 Part 내에서의 스크롤 시점에서 transition 처리가 얼마나 되었는지를 알 수 있다</span><br>

이미지 처리할 때도 calcValues 함수가 사용되는데<br>
> ✏️ `calcValues(values(바꿀 값), currentYOffset(스크롤 값))`<br>
>
> 내부 변수<br>
> `rv`: scrollRatio * (values[1] - values[0]) + values[0];

위의 values의 0번째 index는 0번째 이미지의 번호<br>
1번째 index는 마지막 이미지의 번호로 전체 이미지의 범위를 구할 수 있다<br>
<span id="mus">하지만 위의 값은 실수값으로 Mapping이 되기 때문에 `ParseInt`를 사용하여 Int형으로 바꿔주자</span><br>

### 흰색 박스 그리기

스크롤 양에 따라서 이미지의 좌우측에 흰색 박스가 바깥 방향으로 이동하는 효과가 있다<br>
이미지가 적게 보이다가 스크롤이 끝났을 때 모두 보이는 효과이다<br>

> ✏️ Rect 그리기<br>
> `widthRatio`: `window.innerWidth / objs.canvas.width`<br>브라우저 컨텐츠 내부의 사이즈(스크롤바 포함)/ 캔버스 가로 사이즈(1920px)<br>
> `heightRatio`: `window.innerHeight / objs.canvas.height`<br> 브라우저 컨텐츠 내부의 사이즈/ 캔버스 세로 사이즈(1080px)<br>

모바일 같은 경우 브라우저 사이즈가 세로로 길어지니 `heightRatio`가 `widthRatio`보다 커진다<br>
이때 큰 Ratio와 canvas 곱해주는데 모바일에서는 세로로 꽉찬 화면이 안정적이기 때문이다<br>
즉 canvas가 세로로 길 때는 좌우측이 잘리더라도 세로가 꽉차게<br>
반대로 가로가 길 때에는 가로의 Ratio를 canvas size에 곱하여 가로가 꽉차게 한다<br>
기본 canvas 사이즈에 Ratio를 곱하면 브라우저 컨텐츠 사이즈에 fit되게 할 수 있다<br>

<font size=2>참고로 새고로침 시 스크롤을 임의로 조금 주어 scrollLoop가 load 될 때 자동으로 동작하여 브라우저 사이즈 인식이 가능하다</font>


### push, pop

p5js에는 canvas에서 사용되는 `save()`, `restore()`과 같은 기능인<br>
`push()`, `pop()` 함수가 있다<br>
또한 canvas와 마찬가지로 stack으로 동작한다

> ✏️ `push()`, `pop()`<br>
>
> `push`: 스타일의 상태를 저장<br>
> 이후에 `push`한 스타일로 이어서 작성 가능
>
> `pop`: 이전 상태로 복원<br>
> `push`해 놓았던 스타일을 해제시킨다음 이전의 상태로 돌아갈 수 있음

