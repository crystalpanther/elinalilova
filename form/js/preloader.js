$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $spinner   = $preloader.find('#preloader');
    $spinner.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
