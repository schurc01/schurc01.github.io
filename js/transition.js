$(document).ready(function() {
        		$("body").css("display", "none");
        		$("body").fadeIn(2000);

    			$("a.transition").click(function(event){
        			event.preventDefault();
        			linkLocation = this.href;
        			$("body").fadeOut(1000, redirectPage);      
    			});
         
    			function redirectPage() {
       				window.location = linkLocation;
    			}
                $(".contact").hover(function() {
                    console.log("hello");
                     $(this).animate({marginTop: 100});
                     var email = "sjchurch18@gmail.com";
                     $(#email).html(email);
                });
});