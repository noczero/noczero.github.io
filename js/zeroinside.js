
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function() {
	'use strict'
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    	$('.backtotop a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 500,'easeInOutExpo');
		event.preventDefault();
	});

    	$("#quotes").owlCarousel({
		autoPlay: true, /** for autoplay - change false to 4000 to auto change every 4 seconds (for example) **/
		autoHeight: true,
		stopOnHover: true,
		navigation: false,
		navigationText: ["prev","next"],
		pagination: true,
		paginationNumbers: false,
		paginationSpeed: 500,
		goToFirstSpeed: 500,
		slideSpeed: 500,
		rewindSpeed: 500,
		singleItem: true,
		lazyLoad: false,
		transitionStyle: "backSlide" /** fade, backSlide, goDown, fadeUp - Remove whole line for slide transition **/
	});

	    	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
 
});


