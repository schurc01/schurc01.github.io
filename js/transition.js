$(document).ready(function() {
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y > 1) {
            $('#navbar').addClass('move');
        } else {
            $('#navbar').removeClass('move');
        }
    });
});