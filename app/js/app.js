$(document).ready(function() {
	'use strict';
	document.documentElement.setAttribute('data-useragent', navigator.userAgent);
	$(document).foundation();
});

$( window ).load(function() {
	'use strict';
	$('#gallery-block').attr('data-interchange', '[/images/gallery-small-hi.jpg, (small)], [/images/gallery-medium-hi.jpg, (medium)], [/images/gallery-large-hi.jpg, (large)], [/images/gallery-large-hi.jpg, (orientation: landscape)]');
	$(document).foundation('interchange', 'reflow');
});