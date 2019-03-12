$(document).ready(function(){
    $('.button-left').click(function(){
        $('.sidebar').toggleClass('fliph');
        $('.right_content').toggleClass('expand-width');
    });

    $('ul li').click(function(){
        $('ul li a').removeClass("active-dash");
        $(this).addClass("active-dash");
    });
      
 });