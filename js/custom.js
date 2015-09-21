var $container = $('.isotope-gallery');

jQuery(document).ready(function($) {
	// initialize Isotope
	$container.isotope({
		// options...
		resizable: false, // disable normal resizing
		sortBy : 'random',
		isOriginLeft: true,
		isOriginTop: true,
		layoutMode: 'masonry',
		percentPosition: true,
		itemSelector: '.grid-item',
		masonry: {
			columnWidth: '.grid-sizer'
		},
	});

	/*

	// update columnWidth on window resize
	$(window).smartresize(function(){
	  	$container.isotope({
	    	// update columnWidth to a percentage of container width
		   	masonry: {
		  		columnWidth: $container.width() / 5
		  	},
		    masonryHorizontal: {
		    	rowHeight: 100
		    }
	  	});
	}); */
});