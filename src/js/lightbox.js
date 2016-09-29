function Lightbox(options) {

	var self = this;

	// var TEMPLATES = {};
	// TEMPLATES['lightbox.html'] = '<!DOCTYPE html><html><head></head><body><p>This is an iframe.</p></body></html>';

	var init = function(options) {
		var body = document.getElementsByTagName("body")[0];
		var iframe = document.createElement("iframe");

		iframe.style.width = '100%';
		iframe.style.height = '100%';
		iframe.style.border = 'none';
		iframe.style.display = 'none';
		iframe.sandbox = 'allow-scripts allow-same-origin allow-top-navigation';
		iframe.src = 'lightbox.html';

		body.appendChild(iframe);

		// iframe.contentWindow.document.write(TEMPLATES['lightbox.html']);
		// iframe.contentWindow.document.close();

		self.IFRAME_ELEMENT = iframe;

		window.addEventListener('message', function(e) {
			console.log('message event', e);

			if (e.data === 'close-lightbox') {
				self.hide();
			}
		});
	};

	init(options);
}

Lightbox.prototype.show = function() {
	var iframe = this.IFRAME_ELEMENT;

	console.log('show lightbox');
	iframe.style.display = 'block';

    // this.adDisplayed = !0,
    // this.iframeLoading || (this.valid ? (this.isFF ? t.style.visibility = "visible" : t.style.display = "block",
    // this.IFRAME_ELEMENT.contentWindow.postMessage("showed", this._getTargetOrigin())) : console.error("Cannot show incorrectly configured ad"))
};

Lightbox.prototype.hide = function() {
	var iframe = this.IFRAME_ELEMENT;

	console.log('hide lightbox');
	iframe.style.display = 'none';
};

module.exports = Lightbox;

