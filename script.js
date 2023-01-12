$(function(){
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            pagetop.fadeIn();
        } else{
            pagetop.fadeOut();
        }
    });
    pagetop.click(function(){
        $('html', 'body').animate({
            scrollTop:0
        }, 500);
        return false;

    });

});