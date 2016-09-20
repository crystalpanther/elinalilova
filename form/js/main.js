$(function() {
    $('input#name, input#email, input#message').unbind().blur(function() {
             var id = $(this).attr('id');
             var val = $(this).val();

           switch(id)
           {
                 case 'name':
                    var rv_name = /^[a-zA-Zа-яА-Я]+$/;
                    if(val.length > 2 && val != '' && rv_name.test(val))
                    {
                       $(this).addClass('not_error');
                       $(this).css('border','solid 1px green');
                    }
                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).css('border','solid 1px red');
                    }
                break;

             case 'email':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                   $(this).addClass('not_error');
                   $(this).css('border','solid 1px green');
                }

                else
                {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).css('border','solid 1px red');
                }
            break;
           }
         });
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
