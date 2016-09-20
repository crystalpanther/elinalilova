$.fn.tab = function() {

    var selector = this,
        speed = 300;

    // Controllers
    function tabController(target, speed) {
        selector.find('.tab').removeClass('active');
        selector.find('.tab[data-tab="' + target + '"]').addClass('active');
        selector.find('.content').removeClass('active');
        selector.find('.content' + target + '').addClass('active');
    }

    // Init (default actions)
    tabController('#t1', 0);
    selector.find('.content').css('transition', 'all ' + speed + 'ms ease-out');

    // Actions
    selector.find('[data-tab]').click(function() {
        var target = $(this).attr('data-tab');
        tabController(target, speed);
    });
}
