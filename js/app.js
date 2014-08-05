$(document).ready(function(){
	$(".display").hover(function() { 
    	$(this).find('.overlay').fadeIn(); 
		}, function() { 
    	$(this).find('.overlay').fadeOut();
	});

	//Smooth scrolling for anchor links
	var $root = $('html, body'); //cached selector for increased performance
	$('a').click(function(){
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1000);

			return false;
	});

	setTimeout(function() {
  	if (location.hash) {
    	window.scrollTo(0, 0);
  	}
	}, 1);

});