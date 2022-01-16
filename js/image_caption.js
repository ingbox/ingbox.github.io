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