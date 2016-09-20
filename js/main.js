$(function textResize() {
    jQuery("#title").fitText(0.9, { minFontSize: '40px', maxFontSize: '50px' });
});
$(function mobileMenuClick () {
    var buttonOpen = $('.topbar-mobile').find('.fa-bars');
        buttonClose = $('.menu-m').find('.fa-times');
    buttonOpen.click(function() {
        $('.mobile-menu, .menu-m').addClass('active');
    });
    buttonClose.click(function() {
        $('.mobile-menu, .menu-m').removeClass('active');
        });
        $('.menu-m').find('.desktop-m').click(function() {
            $('.mobile-menu, .menu-m').removeClass('active');
            });
        });
$(window).on('resize', function() {
    $windowWidth = $(this).width();
    if ($windowWidth > 900) {
      $('.mobile-menu, .menu-m').removeClass('active')
     }
});
$(function titleDown () {
    $('.bottombar').delay(100).animate({
      'opacity':'1',
      'top': '40%'
  });
});
$(function srollIng () {
    $(window).bind('scroll', function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.head').css('bottom',(0-(scrolled*.50))+'px');
        $('.skills').css('bottom',(0-(scrolled*.10))+'px');
    }
    $(window).scroll(function() {

        var $logoTitle = $('.logo svg');
        var $aboutmeWrapper = $('.block-container');
        var logoIsVisible = false;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        $(function menuScroll() {
            if ($(window).scrollTop() > 550) {
                $('.topbar').addClass('active');
            } if ($(window).scrollTop() > 300) {
                $('.background').addClass('active');
                $('.bottombar').css({
                    'opacity': '0',
                });
            } else {
                $('.topbar, .background').removeClass('active');
                $('.bottombar').css({
                    'opacity': '1',
                });
            }
        });

    });
    $(window).scroll( function(){
        var bottom_of_window = $(window).scrollTop() + $(window).height();

       $('.logo').each(function(i){

       var bottom_of_object = $(this).offset().top + $(this).outerHeight() - '200';

           /* If the object is completely visible in the window, fadeIn it */
           if( bottom_of_window > bottom_of_object ){

               setInterval(function() {
                   $('.logo-container img').css({
                       'transform': 'scale(1.5)',
                   });
               });
           }
       });
    });

});
