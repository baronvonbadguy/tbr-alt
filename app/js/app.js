var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

$(document).ready(function() {
	'use strict';
	$(document).foundation();
});

$( window ).load(function() {
	'use strict';
	$('#gallery-block').attr('data-interchange', '[/images/gallery-small-hi.jpg, (small)], [/images/gallery-medium-hi.jpg, (medium)], [/images/gallery-large-hi.jpg, (large)], [/images/gallery-large-hi.jpg, (orientation: landscape)]')
	$(document).foundation('interchange', 'reflow');
	console.log('killem');
});