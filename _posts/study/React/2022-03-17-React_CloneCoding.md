---
layout: single
title: "React - 클론 코딩(Clone Coding)"
categories:
  - react
---

<style>
img.aligncenter{display:block;margin:0 auto}
</style>
<!-- d -->
## 서론

컴공과의 영원한 친구 [[동빈나]](https://www.youtube.com/channel/UChflhu32f5EUHlY7_SetNWw)님의<br>
총 18강으로 이루어진 React 실전 강의를 완독하였다.<br> 
구현 목표는 '고객 관리 시스템'이고 나는 이것을 모방하여 '포켓몬 도감'을 만들었다.<br> 

예전에 대학교 웹 프레임워크 수강 중 과제로 포켓몬 도감을 구현한 적이 있었다.<br>
그 때는 순수 <u>HTML + JAVASCRIPT</u>로 구현을 했었고, 구현하는데 꽤나 고생했던 기억이 있다.<br>
이번엔 React로 구현을 해보았으며 클론 코딩(Clone Coding)을 하고,<br>
프로젝트가 완료되면 작성한 코드를 하나 하나씩 뜯어보는 식으로 진행하려고 한다.<br>

먼저 완성된 프로젝트를 Github 주소와 함께 업로드 한다.<br>

[[React Github 주소]](https://github.com/ingbox/React_poke_Util)

<h3>React 구조</h3>

![](/assets/images/posting/react_220317/picture1.png){:.aligncenter}
<figcaption> [그림 1] 구성도</figcaption>

+ App: 화면 출력 코드
   -  Pokemon: 테이블 데이터 출력 컴포넌트(Component)
   -  PokemonAdd: 포켓몬 데이터 삽입 컴포넌트(Component)
   -  PokemonDelete: 포켓몬 데이터 삭제 컴포넌트(Component)
+ Server: Restful API 서버, json과의 통신, Client와 DB를 연결 
+ DB: AWS 서비스 이용
   - RDS: 클라우드 상에 업로드 가능한 DB 서비스, SQL 사용
   - HeidiSQL: DBMS로 HeidiSQL 사용 

<h3> 완성 페이지</h3>

<iframe width="560" height="315" src="https://www.youtube.com/embed/rC8Bpksb86c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 마무리

해당 영상이 19년도 영상이어서 프로젝트를 진행하면서 라이브러리 버전 이슈나,<br>
약간의 코드 이슈 등이 존재했다.<br>
하지만, 유튜브에 댓글이나 구글링을 통해 쉽게 해결할 수 있었다.<br>
뒤에 코드를 분석해보며 발생한 이슈 등을 함께 정리해 보려고 한다.<br>

