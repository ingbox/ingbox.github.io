---
title: "About Me"
layout: single
permalink: /about/
author_profile: true
sidebar_main: true
---

<style>

body{
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider{
    width: 800px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
}

.slides{
    width: 500%;
    height: 500px;
    display: flex;
}

.slides input{
    display: none;

}

.slide{
    width: 20%;
    transition: 2s;
}

.slide img{
    width: 800px;
    height: 500px;
}

.navigation-manual{
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
}

.manual-btn{
    border: 2px solid #40D3DC;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}

.manual-btn:not(:last-child){
    margin-right: 40px;
}

.manual-btn:hover{
    background: #40D3DC;
}

#radio1:checked ~ .first{
    margin-left: 0;
}

#radio2:checked ~ .first{
    margin-left: -20%;
}

#radio3:checked ~ .first{
    margin-left: -40%;
}

#radio4:checked ~ .first{
    margin-left: -60%;
}

.navigation-auto{
    position: absolute;
    display: flex;
    width: 800px;
    justify-content: center;
    margin-top: 460px;
}

.navigation-auto div{
    border: 2px;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;

}

.navigation-auto div:not(:last-child){
    margin-right: 40px;
}

#radio1: checked ~ .navigation-auto .auto-btn1{
    background: #40D3DC;
}

#radio2: checked ~ .navigation-auto .auto-btn2{
    background: #40D3DC;
}

#radio3: checked ~ .navigation-auto .auto-btn3{
    background: #40D3DC;
}

#radio4: checked ~ .navigation-auto .auto-btn4{
    background: #40D3DC;
}
</style>

<body>

<div class="slider">
    <div class="slides">
        <input type="radio" name="radio-btn" id="radio1">
        <input type="radio" name="radio-btn" id="radio2">
        <input type="radio" name="radio-btn" id="radio3">
        <input type="radio" name="radio-btn" id="radio4">
        <div class="slide first">
            <img src="/assets/images/oper/1.jpg" alt="">
        </div>
        <div class="slide">
            <img src="/assets/images/oper/2.jpg" alt="">
        </div>
        <div class="slide">
            <img src="/assets/images/oper/3.jpg" alt="">
        </div>
        <div class="slide">
            <img src="/assets/images/oper/4.jpg" alt="">
        </div>

<div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
        </div>

<div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>

</div>
</div>

<script type="text/javascript">
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    }, 5000);
    </script>

</body>