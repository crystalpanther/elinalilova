$(function mobileMenu() {
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
});

$(function gallerySliderControll() {
    $(function (){
        $('.main-gallery').slick({
            slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
             fade: true,
             asNavFor: '.slider-nav'
            });
    });
    $(function (){
            $('.slider-nav').slick({
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: true,
              centerMode: true,
              focusOnSelect: true,
              asNavFor: '.main-gallery',

              responsive: [
                  {
                      breakpoint: 768,
                      settings: {
                          slidesPerRow: 1,
                          rows: 1,
                          dots: true,
                          slidesToScroll: 2,
                          slidesToShow: 2,
                          dots: false,
                          centerMode: true
                      }
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          rows: 1,
                          dots: true,
                          slidesPerRow: 1,
                          slidesToScroll: 1,
                          slidesToShow: 1,
                          dots: false,
                          centerMode: true
                      }
                  }
              ]
          });
    });
    $('[data-action]').click(function() {
            var target = $(this).attr('data-action');
            if (target == 'prev') {
                $('.main-gallery').slick('prev');
            }
            else  {
                $('.main-gallery').slick('next');
            }
    });

});

$(function sliderControl () {
  $('.slick-slider-img').slick({
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
            rows: 1,
           dots: true,
           arrows: true,
           infinite: true,
           speed: 300,
           slidesToShow: 4,
           slidesToScroll: 4,

           responsive: [
               {
                   breakpoint: 768,
                   settings: {
                       slidesPerRow: 2,
                       rows: 1,
                       slidesToScroll: 2,
                       slidesToShow: 2,
                       dots: false
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       rows: 1,
                       slidesPerRow: 2,
                       slidesToScroll: 1,
                       slidesToShow: 1,
                       dots: false
                   }
               }
           ]
  });

  //slickSLider dots control
  $('.slick-slider-text').slick({
      prevArrow: $('.prev-txt'),
      nextArrow: $('.next-txt'),
  });
});

$(function dropDownMenu() {
    $('.tab-container').tab();
});
