---
layout: single
title: "React - 환경 설정(1/?)"
categories:
  - react
---

<style>
img.aligncenter{display:block;margin:0 auto}
  </style>

## 서론

설을 맞아서, 집에서 단기간 동안 졸업작품을 같이 한 친구와 React를 사용하여<br>
Web App을 Deploy를 해보려고 한다.<br>
요즘 세대에 React는 기본 소양이다.🔥🔥<br>
많은 기업에서 React를 요구하고 있고, 올라오는 추천 채용을 보면 React 경험 유무가 매우 많다.<br>


## 시작해보자

먼저 React란 웹 프레임워크이다. <br>
이는 동적인 UI를 쉽게 만들 수 있게 특화되어있고, 스마트폰과의 호환성이 매우 좋다.<br>

React의 특징으로

* JSX
* Component
* 단방향 Data Binding
* 가상 DOM
* 간단
* 성능

이 있다. 하나씩 해 나가면서 왜 이러한 특징이 있는지 알아보자.<br>

## 환경 설정

### Visual Studio Code

먼저 react를 돌릴 소스코드 에디터는 Visual Studio Code이다.<br>
[[Visual Studio Code]](https://code.visualstudio.com/) 사이트에 접속해서 다운받자.

![](/assets/images/posting/react_220130/picture1.png){:.aligncenter}

### Node.js

다음으로 Node.js 사이트에 접속해주자.<br>
[[Node.js]](https://nodejs.org/ko/) 사이트에 접속해서 다운받자.<br>

<font size=2>⚠️ 권장 버전을 다운 받도록 하자.</font>

![](/assets/images/posting/react_220130/picture2.png){:.aligncenter}


다운 받았으면 내 Web App을 관리할 폴더를 생성해주자.<br>

본인은

`C:\Users\사용자이름\Desktop\react`을 생성하였다.

생성해주었다면 해당 폴더에 가서, [Shift]키를 누른 채로 우클릭을하면<br>
여기에 PowerShell 창 열기가 뜬다. 클릭해주자.

![](/assets/images/posting/react_220130/picture3.png){:.aligncenter}

해당 창에 

`npx create-react-app 프로젝트명`

을 입력해준다.<br>

![](/assets/images/posting/react_220130/picture4.png){:.aligncenter}

그러면 쭉 다운되는 것이 보일 것이고, 자동으로 해당 폴더에 프로젝트가 생성된다.<br>
마지막에 초록색으로 위에 그림에 보이는 것과 같이 뜨면 성공한 것이다.<br>

이제 Visual Studio Code를 들어가서 프로젝트명 이름의 폴더를 Open Folder로 열어줄 것이다.<br>

![](/assets/images/posting/react_220130/picture5.png){:.aligncenter}

모든 준비가 완료됐다.<br>
아래 Console에 `npm start`를 하면 WebSite가 열린다...<br>
<font size=2>나는 왜인지 콘솔이 안먹는다... ㅠ</font><br>

여기까지하면 React 환경 설정 끝이다!😃😃<br>