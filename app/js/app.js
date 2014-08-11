$(document).ready(function() {
	'use strict';
	document.documentElement.setAttribute('data-useragent', navigator.userAgent);
	$(document).foundation();
});

$(window).load(function() {
	'use strict';
  	if ($('#gallery-block').hasClass('hi-res') === false) {
		$('#gallery-block').toggleClass('hi-res');
		var di = $('#gallery-block').attr('data-interchange').replace(/\.jpg/g, '-hi.jpg');
		$('#gallery-block').attr('data-interchange', di);
		$(document).foundation();
		$(document).foundation('interchange', 'update_images');
		$(document).foundation('interchange', 'reflow');
	}
});

$('#gallery-block').load( function () {
	'use strict';
	var src = $(this).attr('src');
	if (src.indexOf('-hi.jpg') === -1) {
		$(this).attr('src', src.replace(/\.jpg/g, '-hi.jpg'));
		console.log(src);

	}
	console.log('i\'m already high you ain\'t gotta worry bout nothin');
});