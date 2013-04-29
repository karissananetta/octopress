/* Dynamic top nav-bar positioning
 *
 */

var num = 180; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.nav-bar').addClass('fixed');
    } else {
        $('.nav-bar').removeClass('fixed');
    }
});