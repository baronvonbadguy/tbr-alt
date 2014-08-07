var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
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
});

$( window ).load(function() {
	'use strict';
	$('img.sprite').attr('src', '/images/gallery-grid.jpg');
	$('img.spacer').attr('src', '/images/spacer.png');
});