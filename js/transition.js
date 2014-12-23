// $(document).ready(function() {
//         		$("body").css("display", "none");
//         		$("body").fadeIn(2000);

//     			$("a.transition").click(function(event){
//         			event.preventDefault();
//         			linkLocation = this.href;
//         			$("body").fadeOut(1000, redirectPage);      
//     			});
         
//     			function redirectPage() {
//        				window.location = linkLocation;
//     			}
// });

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