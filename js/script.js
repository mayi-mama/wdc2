$(function(){
    /*id=js-pagetopをpagetopに代入*/
    var pagetop = $('#js-pagetop');
    /*pagetopがページトップから500px離れるとpagetopがでてくる*/
    pagetop.hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            pagetop.fadeIn();
        } else{
            pagetop.fadeOut();
        }
    });
    /*pagetopをクリックするとページトップまで戻る*/
    pagetop.click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;

    });

    /*スムーススクロール*/
    $('a[href^="#"]').click(function () {
        const speed = 600;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
      });

});