---
layout: single
title: "Blog - Circle Progress Bar 만들기"
categories:
  - blog
---

## 서론 

React 페이지를 만들면서 Circle Progress Bar를 만들려고 한다<br>
디자인은 아래가 뻥 뚫린 모양으로 아래가 완성본이다<br>

![](/assets/images/posting/blog_220707/picture1.jpg){:.aligncenter}


## 구현해보기
외국 사이트를 보며 따라가는 거라서 단계가 있다<br>
공부하면서 해야하므로 포스팅을 진행한다<br>
일단 구현하는데 필요한 모든 CSS 요소들을 뜯어볼 것이고<br>
나의 견해를 넣어볼 예정이다<br>

일단 원을 만드는 것은 아래와 같이 하면된다<br>

```css
  border-radius: 50%;
  width: (원하는 크기)px;
  height: (원하는 크기 위와 동일)px;
```

### radical-gradient

`radical-gradient` 부터 알아보자<br>
한마디로 말하자면 원형 그라데이션 효과이다<br>

`radial-gradient( 원 도형의 위치, color1, color2, ..., color3 )`
color1으로부터 시작해서 color n까지의 비율을 설정할 수 있으며 지정하지 않으면<br>
균일하게 배분된다<br>

### conic-gradient
`conic-gradient`는 원추형 그라데이션 효과이다<br>
원의 360도를 n등분 해서 해당 부분에 그라데이션 효과를 주는 방식이다<br>
0deg 부터 360deg까지 설정할 수 있으며<br>
시계방향으로 지정된다<br>

`conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);`
이런식으로 원형으로 그래프를 표현할 수도 있다<br>

### svg
이번엔 이미지가 깨지지 않도록 svg vector를 이용해서 그래프를 그릴 것인데<br>

```html
    <svg class="circle-container" viewBox="2 -2 28 36"/>
```
에서 viewBox 속성은 svg 요소의 크기와 위치를 지정하는 속성이다<br>
vw, vh와 같이 화면이 조정되면 요소의 크기가 자동으로 조절되도록 하는 속성이다<br>
순서는 `viewBox="min-x min-y width height"`이다<br>

`min-x min-y`는 svg가 그려지는 시작점이고<br>
viewPoint의 28 36같은 경우는 컨테이너의 크기가 200 200 이면<br>
x가 28일때 200px을 꽉채우는 것이고 y가 36일때 200px을 꽉채우는 것이다<br>

### circle
circle component를 사용하여 그래프를 만들게 되었는데<br>
기본 속성으로 `r` `cx` `cy` 속성이 있다<br>
r은 알다시피 반지름으로 생각하면될 것이고<br>
`cx` `cy`가 이제 아까 viewPoint에서 나눈 좌표로 생각하면 될것이다<br>

css 속성을 살펴보자<br>
`stroke-linecap` 원을 그리게 되는데 원을 다 채우지 못했을 때 나오는<br>
끝을 둥글게 하는 속성이다<br>
`stroke-dashoffset` 이 속성을 이용해서 원을 그릴 때 다 채우지 못하는<br>
offset을 표현할 수 있다 이를 통해서 전체 원의 아래를 뻥 뚫리게 하는 것<br>
뿐만아니라 다 채우지 못한 것도 표현할 수 있다<br>
`stoke` 속성에 색깔을 넣어주면 되고,<br>
`stroke-width`속성으로 stroke의 두께를 지정해 줄 수 있다<br>

## 마무리

뜬금없긴한데 공부하다 sass의 `@at-root` 속성을 알아보자<br>
뒤에서 sass 정리하는데 까먹을까봐 먼저 여기에 적어 놓는다<br>
Sass를 작성하다보면 .parent 안에 .child가 중첩되어 계속 안에 있는 것들이<br>
부모의 영향을 받는 경우가 많은데 `@at-root` 속성을 사용하면<br>
안에 작성하여도 별도로 작성한 것의 효과를 받는다<br>

```css
.parent {
    .child {
    }
    @at-root .child {
        /* 난 부모와 별도로 작성됨 */
    }
}
```


