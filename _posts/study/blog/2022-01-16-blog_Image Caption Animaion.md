---
layout: single
title: "Blog - Image Caption Animation"
categories:
  - blog
---

## 서론 

오늘은 Image Caption Animation을 만들어보자.<br>
이미지에 마우스가 올라가면 Caption으로 이미지에 대한 정보를 보여준다.<br> 일반적인 Caption은 밋밋할 수 있기 때문에 이미지 위에 Caption의 Opacity(불투명도)가 변경되어 나타나도록 구현한다.<br>
3가지 정도 예습을 한 뒤 실습으로 한 가지를 더 구현해보자.<br>

내용은 [[Rock's Easyweb Youtube]](https://www.youtube.com/watch?v=E4Vih_rpwaM) 영상을 보고 정리한 것이다.


<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="../../js/image_caption.js" type="text/javascript"></script>


<style>
#images p {
  position:relative;
  width: 558px;
  height: 313px;
  margin: 0 auto 80px;
  overflow: hidden;
}

#images p strong {
  color: #fff;
  font-size: 20px;

  position: absolute;
  display: block;
  z-index: 1;
  bottom: 0;
  width: 558px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  text-align: left;
  padding: 15px;
}

#images p span {
  position: absolute;
  display: block;
  z-index: 0;
  top: 0;
  width: 558px;
  height: 313px;
  box-shadow: inset 0 0 50px rgba(50, 30, 0, 0.6),
              inset 0 0 100px rgba(50, 30, 0, 0.3);
  background: rgba(255, 155, 0, 0.2);
  opacity: 0;
}

#images p:nth-child(1) strong {
  opacity: 0;
}

#images p:nth-child(2) strong {
  opacity: 0;
  left: -200%;
}

#images p:nth-child(3) strong {
  opacity: 0;
  bottom: -80px;
  background: rgba(34, 34, 34, 1);
}

#images p:nth-child(3) img {
  position: absolute;
  top: 0px;

}
</style>

## 시작해보자

아래에 이미지에 마우스 포인터를 올려보자. Caption이 나타나는 것을 확인할 수 있다.<br>
각각 어떤식으로 구현이 됐는지 살펴보고, 어떻게 Animation이 적용됐는지도 살펴보자.<br>

<div id="images">
  <div class="inner clearfix">
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png"><strong>Chim's Buger</strong><span></span></p>
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png"><strong>Chim's Buger</strong><span></span></p>
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png"><strong>Chim's Buger</strong><span></span></p>
  </div>
</div>

## 구현
### HTML

```html
<div id="images">
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png">
    <strong>Caption</strong><span></span></p>
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png">
    <strong>Caption</strong><span></span></p>
    <p><img src="/assets/images/posting/blog_image_caption/침버거.png">
    <strong>Caption</strong><span></span></p>
</div>
```

* id가 images인 부모가 p, img, strong, span 태그를 가진 자식을 3개 가지고 있음
* img는 이미지, strong은 태그, span은 이미지 내부 그림자 처리를 함

### CSS

```css
#images p {
  position:relative;
  width: 558px;
  height: 313px;
  margin: 0 auto 80px;
  overflow: hidden;
}

#images p strong {
  color: #fff;
  font-size: 20px;

  position: absolute;
  display: block;
  z-index: 1;
  bottom: 0;
  width: 558px;
  height: 60px;
  background: rgba(0, 0, 0, 0.5);
  text-align: left;
  padding: 15px;
}

#images p span {
  position: absolute;
  display: block;
  z-index: 0;
  top: 0;
  width: 558px;
  height: 313px;
  box-shadow: inset 0 0 50px rgba(50, 30, 0, 0.6),
              inset 0 0 100px rgba(50, 30, 0, 0.3);
  background: rgba(255, 155, 0, 0.2);
  opacity: 0;
}

#images p:nth-child(1) strong {
  opacity: 0;
}

#images p:nth-child(2) strong {
  opacity: 0;
  left: -200%; /* 부모 size의 left -200%에 위치 */
}

#images p:nth-child(3) strong {
  opacity: 0;
  bottom: -80px; /* 부모 size의 bottom -80px에 위치 */
  background: rgba(34, 34, 34, 1);
}

#images p:nth-child(3) img {
  position: absolute; /* 부모 p */
  top: 0px; /* p의 top에서 0px 만큼 offset에 위치 고정 */
}
```

* `overflow` 속성은 CSS 내의 요소의 크기가 너무 클 때 어떻게 보여줄지 결정

|속성 값|기능|
|:-----:|:-----:|
|**visible**|기본 설정으로, 넘칠 경우 상자 밖으로 보여짐|
|**hidden**|넘치는 부분은 잘려서 보여지지 않음|
|**scroll**|스크롤바가 추가됨|
|**auto**|컨텐츠 양에 따라 스크롤바가 추가될지 결정|

<br>

* `position: absolute`는 다른 요소들과 겹쳐 위치를 나타내기 위해
* `z-index` 는 화면에 보여질 우선순위를 의미

> z-index가 없는 경우 다음 순서대로 아래에서 위로 쌓임
> 1. 뿌리 엘리먼트와 배경과 테두리
> 2. 자식 엘리먼트들은 HTML에서 등장하는 순서대로
> 3. position이 지정된 자식 엘리먼트들은 HTML에서 등장하는 순서대로
>
> z-index가 있을 경우 숫자가 클수록 위에 쌓임(span위에 strong)

* `box-shadow`는 object에 그림자를 추가

```css
box-shadow: 우측 이동 | 하단 이동 | 페더 값 | 그림자 넓이 증가 | 그림자 색 ;

e.x
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

inset의 경우 내부 그림자
box-shadow: inset 좌측 넓이 | 우측 넓이 | 페더 값 | 그림자 넓이 증가 | 그림자 색 ;

e.x
box-shadow: inset 5em 1em 10px 0px gold;
```

* `#images p:nth-child(n) strong`은 hover가 되지 않았을 때 태그의 상태

### SCRIPT

```javascript
$(function(){
    var $duration = 300;
    var $image = $('#images p');

    $image.filter('p:nth-child(1)').mouseover(function(){
        $(this).find('span, strong').stop().animate({opacity: 1}, $duration);
    })
    .mouseout(function(){
        $(this).find('span, strong').stop().animate({opacity: 0}, $duration);
    });

    $image.filter('p:nth-child(2)').mouseover(function(){
        $(this).find('span').stop().animate({opacity: 1}, $duration);
        $(this).find('strong').stop().animate({opacity: 1, left: '0%'}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({opacity: 0}, $duration);
        $(this).find('strong').stop().animate({opacity: 0, left: '-200%'}, $duration);
    });

    $image.filter('p:nth-child(3)').mouseover(function(){
        $(this).find('span').stop().animate({opacity: 1}, $duration);
        $(this).find('strong').stop().animate({opacity: 1, bottom: '0%'}, $duration);
        $(this).find('img').stop().animate({top:'-40px'}, $duration);
    })
    .mouseout(function(){
        $(this).find('span').stop().animate({opacity: 0}, $duration);
        $(this).find('strong').stop().animate({opacity: 0, bottom: '-80px'}, $duration);
        $(this).find('img').stop().animate({top:'0px'}, $duration);
    });
  });
```

* $는 혹시 모를 예약어에 대비해서 구별되게 선언
* mouseover는 마우스 포인터가 올라갔을 때의 동작, mouseout은 마우스 포인터가 나갔을 때의 동작


## 실습

## 마무리

내용은 [[Rock's Easyweb Youtube]](https://www.youtube.com/watch?v=E4Vih_rpwaM)를 참고하였습니다.<br>
해당 내용은 상기 링크의 내용을 재구성하기 보다는 제가 이해하기 위해 정리한 것입니다.<br>
더 자세한 내용은 해당 블로그에 있으니 참고해주시면 감사하겠습니다.
