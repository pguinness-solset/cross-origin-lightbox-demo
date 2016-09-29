import $ from 'jquery';

function Lightbox(options) {

	const self = this;

	// var TEMPLATES = {};
	// TEMPLATES['lightbox.html'] = '<!DOCTYPE html><html><head></head><body><p>This is an iframe.</p></body></html>';

	const init = function (options) {
		const $body = $('body');
		const $iframe = $('<iframe>');

		$iframe.css({
			'position': 'absolute',
			'top': '30px',
			'width': '100%',
			'height': '100%',
			'border': 'none',
			'display': 'none'
		});

		$iframe.attr('sandbox', 'allow-scripts allow-same-origin allow-top-navigation');
		$iframe.attr('src', 'http://localhost:8080/lightbox.html');

		$body.append($iframe);

		self.$iframe_element = $iframe;

		$(window).on('message', (e) => {
			console.log('message event', e);

			if (e.originalEvent.data === 'close-lightbox') {
				self.hide();
			}
		});
	};

	init(options);
}

Lightbox.prototype.show = function () {
	console.log('show lightbox');
	this.$iframe_element.show();
};

Lightbox.prototype.hide = function () {
	console.log('hide lightbox');
	this.$iframe_element.hide();
};

module.exports = Lightbox;

