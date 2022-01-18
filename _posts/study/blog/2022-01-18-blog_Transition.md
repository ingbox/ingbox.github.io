---
layout: single
title: "Blog - Transtion"
categories:
  - blog
---

## 서론 

오늘은 <u>Transition에 대해</u>을 알아보자.<br>
앞서 Animation에 관해 살펴보았는데 Transition과 무슨 차이가 있을까?<br>

* Transition은 요소의 상태가 변하면 변하기 까지를 Animation을 실행
* Animation은 요소와 상태나 동작을 키프레임 단위로 변경

<br>
쉽게 Animation은 0%, 30%, 50% 등 프레임 단위로 세밀한 동작을 제어할 수 있는 반면,<br>
Transition은 0% 100%가 지정되어 있는 상태에서 시작과 끝 속성의 변화만 제어할 수 있다.<br>
즉, Transition은 Animation에 포함되는 것이다. <br>Animation 속성으로 모든 Transition을 만들 수 있다.<br>

## 구현해보기

해당 섹션의 빨간색 또는 흰색 바탕부분에 마우스 포인터를 올려 놓거나 <br>스마트 폰이라면 터치를 해보자.<br>


 <div id="section_1">
    <div></div>
  </div>


### HTML

```html
  <div id="section_1">
    <div></div>
  </div>
```

### CSS

```css
#section_1{
    position:relative;
    width: 100%;
    height: 100px;
    margin: 0 auto 80px;
    overflow: hidden;
    background-color: white;
  }

  #section_1 div {
    width: 100px;
    height: 100px;
    background-color: red;

    /* transition 부분 */
    transition-property: width;
    transition-duration: 2s;
    transition-delay: 1s;
    transition-timing-function: ease-in; 
  }

  #section_1:hover div {
      width: 100%;
  }
```

* `transition-property`는 transition이 적용될 속성
* `transition-duration`은 transition의 지속시간
* `transition-delay`는 transition 적용 전과 후에 delay를 부여
* `transition-timing-function`은 transition에 속도 곡선을 지정

속도 곡선이란, 곡선의 기울기에 따라서 Transition Animation의 동작 속도가 달라지게 조절할 수 있는 속성이다.
속도 곡선을 custom하게 만들 수도 있다.<br>

[[cubic bezier]](https://cubic-bezier.com/)라는 사이트에서 적용하고 싶은 속도 곡선을 만든 뒤,
`cubic-bezier(.17,.67,.83,.67)` 형태로 복사해서 `transition-timing-function`에 값으로 넣어준다.


<br>

![](/assets/images/posting/blog_transition/picture1.jpg){:.aligncenter}
<figcaption> [그림 1] cubic-bezier(.17,.67,.89,1.52)</figcaption>
<br>

[그림1] 모양의 그래프를 만들어 주면 원하는 수치를 넘어섰다가 <br>다시 원하는 수치로 돌아오는 효과를 줄 수 있다.<br>
또한, transition도 동일한 속성을 부여한다면 아래와 같이 한 줄로 코딩 가능하다. 

```css
transition: transition-property | transition-duration | transition-delay | transition-timing-function;

e.x
transition: all 2s 1s ease-in; /* all은 property의 모든 속성에 적용 */
```


## 실습

  <div id="background">
      <p class="bit"> P A C -<br> M A N</p>
      <img id="ghost" src="/assets/images/posting/blog_transition/ghost.png">
      <img id="pac-man" src="/assets/images/posting/blog_transition/pacman.png">
      <!-- <img id="coin_1" src="/assets/images/posting/blog_transition/coin.png">
      <img id="coin_2" src="/assets/images/posting/blog_transition/coin.png">
      <img id="coin_3" src="/assets/images/posting/blog_transition/coin.png"> -->
  </div>

  <style>

  img.aligncenter{display:block;margin:0 auto}
    /* 구현해보기 */

  #section_1{
    position:relative;
    width: 100%;
    height: 100px;
    margin: 0 auto 80px;
    overflow: hidden;
    background-color: white;
  }

  #section_1 div {
    width: 100px;
    height: 100px;
    background-color: red;

    /* 변화할 속성 */
    
    transition-property: width;
    transition-duration: 2s;
    transition-delay: 0.5s;
    transition-timing-function: ease-in; 

  }

  #section_1:hover div {
      width: 100%;
  }


    /* 실습 */


    #background {
      position: relative;
      width: 100%;
      height: 500px;
      background-color: black;
    }

    p.bit {
      position: absolute;
      left: 0; 
      right: 0;
      
      margin-left: auto; 
      margin-right: auto;
      width: 400px;

      font-size: 3vw;
      font-family: "bit";
      color: yellow;
    }

    #background img:nth-of-type(1) {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 10%;

      transition: all 5s linear;
    }

    #background:hover img:nth-of-type(1){
      left: 70%;
    }

     #background img:nth-of-type(2) {
      position: absolute;
      max-width: 100px;
      height: auto;
      top: 50%;
      left: 30%;

      transition: all 5s linear;

    }

    #background:hover img:nth-of-type(2){
      left: 80%;
    }

      #background img:nth-of-type(3) {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 35%
    }

     #background img:nth-of-type(4) {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%
    }

      #background img:nth-of-type(5) {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 65%
    }
  </style>

 




## 마무리

내용은 [[Rock's Easyweb Youtube]](https://www.youtube.com/watch?v=t7HqLi92hSM)를 참고하였습니다.<br>
해당 내용은 상기 링크의 내용을 재구성하기 보다는 제가 이해하기 위해 정리한 것입니다.<br>
더 자세한 내용은 해당 블로그에 있으니 참고해주시면 감사하겠습니다.
