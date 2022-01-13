$(function(){

    var $menu = $('#top_menu li');
    var $contents = $('#contents > h2');

    /* 기본 속성인 a를 막아버려야함 */
    $menu.click(function(event){
        event.preventDefault();
        var idx = $(this).index();

        /* 해당 순번에 상응하는 것 */
        var tt = $contents.eq(idx).offset().top /* section의 offset 어느정도 떨어져있는지 확인 */

        console.log(tt) /* 1399.640625 2505.640625 3611.640625 */


        $('html, body').animate({scrollTop:tt});

    });

  });