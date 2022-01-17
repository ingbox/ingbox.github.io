---
layout: single
title: "Blog - Scroll Based Animation"
categories:
  - blog
---

## 서론 

오늘은 <u>Scroll Based Animation</u>을 만들어보자.<br>
아이디어는 간단하다. Trigger가 Top에서 얼마만큼 offset이 될 때<br>
Animation이 작동하는 지가 이번 구현의 관건이다.<br>
Animation이 적용된 사이트의 예시로 [[디즈니 공식 홈페이지]](http://www.disney.co.kr/home/index.jsp)를 확인해보자.<br>

<div id="mibang">
  <img src="/assets/images/posting/blog_scroll_animation/picture1.jpg">
</div>

## 구현해보기

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="../../js/scroll_animation.js" type="text/javascript"></script>

<!-- Netflix -->
<h2>Section</h2> 
  <div id="section_1">
    <p><img src="/assets/images/posting/blog_scroll_animation/ingflix.png"><span></span></p>
  </div>

<style>
#section_1 p {
  position:relative;
  width: 700px;
  height: 400px;
  margin: 0 auto 80px;
  overflow: hidden;
  background-color: white;
}

#mibang {
  position:relative;
  width: 700px;
  height: 1000px;
  margin: 0 auto 80px;
  overflow: hidden;
}

#mibang img {
  position: absolute;
  margin: 0px auto;
}

#section_1 p span {
  position: absolute;
  display: block;
  z-index: 1;
  top: 0;
  width: 700px;
  height: 400px;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
}

#section_1 p img {
  position: absolute;
  margin: 0px auto;
  left: 0; 
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto; 
  margin-right: auto;
  margin-top: auto; 
  margin-bottom: auto;
  width: 40%;
  opacity: 0;
}

img.animate {
  animation: size_change 1.5s 0.1s 1 ease-out forwards normal;
}

@keyframes size_change {
  0% {
		opacity : 0;
	}
  25%{
    opacity: 1;
    width: 50%
  }
  100% {
		opacity : 1;
    width: 40%
	}
}
</style>
<br>

### HTML

```html
  <div id="section_1">
    <p><img src="Image Link"><span></span></p>
  </div>
```

* span은 background에 그림자를 주기 위해서 추가

### CSS

```css
#section_1 p span { /* span 그림자 추가 */
  position: absolute;
  display: block;
  z-index: 1;
  top: 0;
  width: 700px;
  height: 400px;
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.9);
}

#section_1 p img { /* img 가운데 정렬 */
  position: absolute;
  margin: 0px auto;
  left: 0; 
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: auto; 
  margin-right: auto;
  margin-top: auto; 
  margin-bottom: auto;
  width: 40%;
  opacity: 0;
}

img.animate {
  animation: size_change 1.5s 0.1s 1 ease-out forwards normal;
}

@keyframes size_change {
  0% {
		opacity : 0;
	}
  25%{
    opacity: 1;
    width: 50%
  }
  100% {
		opacity : 1;
    width: 40%
	}
}
```
* Script문에서 Image에 animate라는 class를 추가하는 코드를 구현
* Class가 추가되면 `img.animate`가 script문의 조건을 만족 시 동작

### SCRIPT

```javascript
$(function(){
    var $device = $('#section_1');
    var $offset = 500;
    var $device_offset = $device.offset().top - $offset;

    $(window).scroll(function(){
    if($(this).scrollTop() > $device_offset) {
        $device.find('img').addClass('animate');
      } 
    });
  });
```

* `$device`는 Animation이 동작할 객체
* 조건문이 만족할 때 `img` 태그에 `addClass`를 실행 

## 마무리

내용은 [[Rock's Easyweb Youtube]](https://www.youtube.com/watch?v=t7HqLi92hSM)를 참고하였습니다.<br>
해당 내용은 상기 링크의 내용을 재구성하기 보다는 제가 이해하기 위해 정리한 것입니다.<br>
더 자세한 내용은 해당 블로그에 있으니 참고해주시면 감사하겠습니다.
