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
	$('.sprite').attr('src', '/images/gallery-grid.jpg');
	$('.spacer').attr('src', '/images/spacer.png');
});