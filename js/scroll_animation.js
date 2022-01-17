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