---
layout: single
title: "Blog - Scroll Menu (1/?)"
categories:
  - blog
---

## 서론

오늘은 **<u>Scroll Menu</u>**에 대해서 알아보자. <br>
JQuery를 이용하는 방법과 오직 Javascript로 구현하는 방법이 있는데, <br> 
JQuery문으로 구현해 보겠다. <br><br>
**<u>Scroll Menu</u>**는 body에 Section을 정해놓고 그 Section으로 화면을 바로 이동시켜주는 것이다.<br>
페이지에서 자체적으로 링크를 달아주면 바로 이동이 가능하지만 매우 투박하게 움직인다.<br><br>
이를 개선하기 위해 Animation과 같이 사용하게 되면 부드러운 화면 넘김으로 구현 가능하다.<br>
Minimal-mistake에서는 쉽게 구현할 수 있게 템플릿을 제공해주고 있는데,<br>
언제까지 Minimal-mistake를 쓸 것은 아니기 때문에 JQuery를 이용해서 구현해보겠다. 

## 시작해보자

목록을 만들어서 이동하도록 하겠다.

```html
<ul>
<li class="on"><a href="#section1">section 1</a></li>
<li><a href="#section2">section 2</a></li>
<li><a href="#section3">section 3</a></li>
</ul>


<h2 id="section1"> 제 1구역 </h2>
<h2 id="section2"> 제 2구역 </h2>
<h2 id="section3"> 제 3구역 </h2>

```

<br>
처음에는 단순히 이렇게만 해도 해당 Section으로 이동하는 것이 가능하다. 하지만 링크를 걸어놓은 상태라
그냥 순식간에 순간이동해버린다. <font size=2> 보기가 좋지가 않다... </font> <br>
스르륵 이동하도록하는 것이 목표이다.<br>


```html
<ul id="top_menu">
<li><a href="#section1">section 1</a></li>
<li><a href="#section2">section 2</a></li>
<li><a href="#section3">section 3</a></li>
</ul>

<div id="contents">
  <h2 id="section1"> 제 1구역 </h2>
  <div class="space"></div>

  <h2 id="section2"> 제 2구역 </h2>
  <div class="space"></div>

  <h2 id="section3"> 제 3구역 </h2>
  <div class="space"></div>
</div>
```

<br>
먼저 이동할 section의 목록을 표시해 줄 것이다.<br>
이 글에서는 Minimal-mistake에 자동으로 css가 적용되어 있어서 목록 표시가 보일 것이다.<br>
이동을 할 때는 id(contents) > tag를 참고하여 접근할 것이다. <font size=2> h2 태그에 id는 굳이 필요 없다.</font> <br>
이젠, css를 살펴보자. 
<br>

```css
div .space {
height: 1000px;
}
```

<br>
css는 딱히 준 건 없다. 여백이 있어야지 이동하는 느낌이 들기 때문에 각 section 마다 여백을 주었다.
<br>

마지막으로 script문이다. 앞서 말했듯이 JQuery문으로 작성되었고,<br>
마지막에 Animation을 추가해서 참고한 section으로 이동시켰다.

```javascript

$(function(){

    var $menu = $('#top_menu li');
    var $contents = $('#contents > h2');

    /* 기본 속성인 a를 막아버려야함 */
    $menu.click(function(event){
        event.preventDefault();
        var idx = $(this).index();

        var tt = $contents.eq(idx).offset().top /* section의 offset 어느정도 떨어져있는지 확인 */

        /* console.log(tt); 1399.640625 2505.640625 3611.640625 */

        $('html, body').animate({scrollTop:tt});

    });

  });

```

* `$(this).index()`는 같은 레벨에 있는 요소를 기준으로 볓 번째 index 인지
* `$("item").index(this)` 모든 item을 기준으로 몇 번째 index인지

이렇게 scroll을 담당하는 html과 body에 Animation을 주어 Top으로 부터 Offset 만큼 이동하게 만드는 것이다.

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="../../js/scroll_menu.js" type="text/javascript"></script>

<style>

div .space {
height: 1000px;
}

</style>

<ul id="top_menu">
<li class="on"><a href="#section1">section 1</a></li>
<li><a href="#section2">section 2</a></li>
<li><a href="#section3">section 3</a></li>
</ul>


<div id="contents">
  <h2 id="section1"> 제 1구역 </h2>
  <div class="space"></div>

  <h2 id="section2"> 제 2구역 </h2>
  <div class="space"></div>

  <h2 id="section3"> 제 3구역 </h2>
  <div class="space"></div>
</div>


## 마무리

혹시 github blog에서 local한 js파일을 어느 파일에서 관리해야할 지 모르는 사람이 있을까 싶어<br>
적는다. post가 있는 folder 기준으로 `../../`를 해주면 root로 이동하게 된다.<br>
directory 구조마다 다를 수 있으니, 작동하지 않는 사람은<br>
console[f12키 -> console]로 404 Error가 뜨는 지 확인해가면서 root 위치를 찾아주자.<br> 

Root가 확인되었다면, 그 곳에 directory를 하나 만든 다음 그 안에 넣어줘서 관리하자.<br>
Post할 md폴더 까지는 local한 주소로 불러오진 못하는 듯하다.
<font size=2> github에 업로드하고 쓸 주소면 github repository 내에 upload해서 url로 불러오면 된다.</font><br>


내용은 [Rock's Easyweb Youtube](https://www.youtube.com/watch?v=IxRRA-lXx1Q)를 참고하였습니다.<br>
해당 내용은 상기 링크의 내용을 재구성하기 보다는 제가 이해하기 위해 정리한 것입니다.<br>
더 자세한 내용은 해당 블로그에 있으니 참고해주시면 감사하겠습니다.
