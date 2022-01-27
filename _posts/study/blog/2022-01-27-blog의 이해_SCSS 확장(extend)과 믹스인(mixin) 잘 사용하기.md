---
layout: single
title: "Blog - SCSS 확장(extend)과 믹스인(mixin) 잘 사용하기"
categories:
  - blog
sitemap :
  changefreq : daily
  priority : 1.0
---

## 서론

오늘은 SCSS에서 사용하는 `@extend`와 `@mixin`에 대해서 알아볼 것이다.<br>
간단히 말하지면, `@extend`는 다른 스타일을 가져와서 사용할 때,<br>
`@mixin`은 공통적으로 쓰이는 속성들을 묶어서 관리해주는 역할을 한다.<br>
`@extend`도 마찬가지로 공통적인 속성을 재사용할 때 유리하다.<br>

## 시작해보기 앞서

지금까지 CSS만 쓰다가 SCSS를 쓰니까 이 둘의 차이점이 무엇인지 알아보자.<br>
추가적으로 SASS도 간단히 설명하려 한다.<br>

### CSS(Cascading Style Sheets)

```css
.wrap div:first-child{ border:3px;}
.wrap .box1:hover{color:#fff000;}
```

위의 코드는 wrap 클래스 하위의 div 태그의 첫번째 child에게 3px의 테두리를 주고,<br>
wrap 클래스 하위의 box1 클래스에 마우스 커서가 올라가면 wrap의 색깔을 바꾸란 코드다.<br>
이 코드를 SCSS로 바꾼다면

### SCSS(Sassy CSS)

```css
.wrap{
  div{
    &:first-child{
      border: 3px;
      }
  }

  .box1{
    &:hover{
      color: #fff000;
    }
  }
}
```

이처럼 더 구조적으로 표현이 가능하다. 이는 유지보수를 할 때 유용할 것이다.<br>
물론 CSS의 모든 문법과 기능이 SCSS에서 사용할 수 있다.<br>
뿐만 아니라 `&`기호가 사용되는데 이는 부모 선택자를 의미한다.<br>
즉 순서대로 첫번째 `&`는 div를 의미하고 두번째 `&`는 .box1을 의미한다.<br>

### SASS

```css
.wrap
  div
    &:first-child
      border: 3px
  
  .box1
    &:hover
      color: #fff000
```

SASS는 `{ }` (중괄호)를 줄 간격으로 구분하고, `;` (세미클론)도 줄바꿈으로 대체했다.
<br>

정리하자면 <u>가장 큰 범용성과 호환성은 SCSS가 가장 뛰어나다.</u><br>
내 블로그 템플릿의 제공자인 Minimal-mistake도 역시 SCSS로 CSS가 정리되어 있다.<br>

SCSS와 SASS는 모두 결국 컴파일러에 의해서 CSS로 변환되는 것은 마찬가지이다.<br>
단지, 가독성이 좋아지기 때문에 다른 팀원들과 작업 시에 의사소통을 원활하게 할 수 있을 것이다.

## @extend

오늘의 메인은 `@extend`와 `@mixin`이므로 사용해보도록 하자.<br>
먼저 `@extend`를 간단한 코드로 표현해보자면,

### 간단한 @extend 사용 예시
```css
%brand-font {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

h1 {
  @extend %brand-font;
}

h2 {
  @extend %brand-font;
}
```

위와 같이 연관성이 있는 선택자에 `%brand-font`와 같이 공통적으로 사용될 속성을 뺀 다음,<br>
부여될 선택자에 `@extend %brand-font`와 같이 삽입해주는 형태이다.<br>
이처럼 간단히 사용할 수 있기 때문에 마주칠 수 있는 이슈가 없을까 살펴보았다.<br> 

이내 하단의 블로그를 발견하였고,<br>
[[Sass에서 웬만하면 extend 말고 믹스인을 사용하자]](https://mytory.net/2016/12/23/when-to-use-extend-when-to-use-a-mixin.html) 이다.<br>
정리하자면 `@extend`를 오용하고 있는 경우가 많고, <br>


### @extend를 오용한 경우

```css
%brand-font {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

...

h1 {
    @extend %brand-font;
    font-size: 2em;
}

...

.btn {
    @extend %brand-font;
    display: inline-block;
    padding: 1em;
}

...

.promo {
    @extend %brand-font;
    background-color: #BADA55;
    color: #fff;
}

...

.footer-message {
    @extend %brand-font;
    font-size: 0.75em;
}
```

각 선택자들은 서로 연관성이 전혀 없고, 이러한 경우 `@extend`를 부여하면

### 컴파일 후
```css
h1, .btn, .promo, .footer-message {
    font-family: webfont, sans-serif;
    font-weight: 700;
}

...

h1 {
    font-size: 2em;
}

...

.btn {
    display: inline-block;
    padding: 1em;
}

...

.promo {
    background-color: #BADA55;
    color: #fff;
}

...

.footer-message {
    font-size: 0.75em;
}
```

위와같이 컴파일이 되는데, 수백 라인 떨어져 있는 코드들이 한 곳에 묶이게 된다.<br>
이는 명시도([Specificity](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity))도 떨어지고,<br>
컴파일 후 용량이 더 커지는 불상사가 발생할 수도 있다.<br>

반면, 아래의 코드는 `@extend`를 올바르게 사용한 코드이다.<br>

### 올바르게 사용한 @extend 코드

```css
.btn,
%btn {
    display: inline-block;
    padding: 1em;
}

.btn-positive {
    @extend %btn;
    background-color: green;
    color: white;
}

.btn-negative {
    @extend %btn;
    background-color: red;
    color: white;
}

.btn-neutral {
    @extend %btn;
    background-color: lightgray;
    color: black;
}
```
<br>

### 컴파일 후

```css
.btn,
.btn-positive,
.btn-negative,
.btn-neutral {
    display: inline-block;
    padding: 1em;
}

.btn-positive {
    background-color: green;
    color: white;
}

.btn-negative {
    background-color: red;
    color: white;
}

.btn-neutral {
    background-color: lightgray;
    color: black;
}
```

위의 선택자들은 코드들은 코드 상으로 떨어져있지도 않고,<br>
모두 버튼 속성이라는 연관성을 갖는다. 그러므로 이는 `@extend`를 적합하게 사용했다고 본다.<br>


## @mixin

`@mixin`은 단지 중복되는 코드를 제거하기 위해서 사용된다.<br>

### 간단한 @mixin 사용 예시

```css
@mixin site_color {
  color: #f00;
}

.h1 {
  @include site_color;
}

.btn {
  @include site_color;
}

.proto {
  @include site_color;
}
```

### 컴파일 후

```css
.h1 {
  color: #f00; 
  }

.btn {
  color: #f00; 
  }

.proto {
  color: #f00; 
  }
```

`@mixin`은 컴파일 후에 site_color의 속성이 그대로 선택자의 속성이 되었음을 알 수 있다.<br>
이는 <u>연관성이 없는 규칙을 따로 만들어서 사용하는 것</u>이고,<br> 코드를 반복하지 않고
재사용할 수 있다.<br>
뿐만아니라, 함수처럼 동적인 값을 인자로 넘겨줄 수 있다.


### @mixin 인자 값 사용 예시
```css
@mixin truncate($width: 100%) {
    width: $width;
    max-width: 100%;
}

.foo {
    @include truncate(100px);
}
```

### 컴파일 후

```css
@mixin truncate($width: 100%) {
    width: $width;
    max-width: 100%;
}

.foo {
    width: 100%;
    max-width: 100%;
}
```


## 마무리

[[Sass에서 웬만하면 extend 말고 믹스인을 사용하자]](https://mytory.net/2016/12/23/when-to-use-extend-when-to-use-a-mixin.html)와<br>
[[mixin과 extend 알맞게 사용하기]](https://13akstjq.github.io/sass/2020/02/22/mixin%EA%B3%BC-extend-%EC%95%8C%EB%A7%9E%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.html)를 참고하였습니다.

더 자세한 내용은 해당 블로그에 있으니 참고해주시면 감사하겠습니다.
