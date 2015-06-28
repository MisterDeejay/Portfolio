/**
 * This function takes in two variables, the tag with the active class
 * and the tag you want to swap the active class to. When the screen has scrolled
 * 290px they tags swap the active class again.
 **/
window.swapActiveLink = function(activeLink, inactiveLink) { 
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 290) {
			$(inactiveLink).addClass("active");		
			$(activeLink).removeClass("active");
		} else {
			$(inactiveLink).removeClass("active");		
			$(activeLink).addClass("active");			
		}
	});
};
