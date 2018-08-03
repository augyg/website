(function($){
	$(document).ready(function(){
		M.AutoInit();
		setTimeout(function() {
			var carousel = $('.carousel');
			carousel.find('.progress').remove();
			carousel.carousel();
		}, 1500);
	}); // end of document ready
})(jQuery); // end of jQuery name space
