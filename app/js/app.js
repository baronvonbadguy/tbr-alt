$(document).ready(function() {
	'use strict';
	document.documentElement.setAttribute('data-useragent', navigator.userAgent);
	$(document).foundation();
});

$(window).load(function() {
	'use strict';
  	if ($('#page-gallery').hasClass('hi-res') === false) {
		$('#page-gallery').toggleClass('hi-res');
	}
});
