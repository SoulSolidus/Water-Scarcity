$(document).ready(function(){
    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 100){
            $(".nav").css({"background-color": "#00b4d8", "transition": "0.7s ease"});
            $(".nav").css({"position": "sticky", "transition": "0.7s ease"});
        } else{
            $(".nav").css({"background-color": "transparent"});
            $('.nav').css({"position": "absolute"})
        }
    });
});