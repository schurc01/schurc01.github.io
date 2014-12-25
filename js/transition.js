$(document).ready(function() {
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y > 1) {
            $('#navbar').addClass('move');
        } else {
            $('#navbar').removeClass('move');
        }
    });
    $('a[href^="#"]').on('click',function (e) {
    		//understand
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});