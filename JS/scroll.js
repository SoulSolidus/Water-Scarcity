$(window).scroll(function() {

    if ($(".main").offset.top > 50){

        $(".main").addClass(".cambiaFondo");

    }   else {

        $(".main").removeClass(".cambiaFondo")
    }
});