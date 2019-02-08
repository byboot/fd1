( function($) {
$(document).ready(function () {
					 "use strict";
 $("#green_monster").mlens({
        imgSrc: $("#green_monster").attr("data-big"), // path of the hi-res version of the image
        imgSrc2x: $("#green_monster").attr("data-big2x"), // path of the hi-res @2x version of the image
        //for retina displays (optional)
        lensShape: "circle", // shape of the lens (circle/square)
        lensSize: 220, // size of the lens (in px)
        borderSize: 0, // size of the lens border (in px)
        borderColor: "#fff", // color of the lens border (#hex)
        borderRadius: 0, // border radius (optional, only if the shape is square)
        imgOverlay: $("#green_monster").attr("data-overlay"), // path of the overlay image (optional)
        overlayAdapt: true, // true if the overlay image has to adapt to the lens size (true/false)
        zoomLevel: 0.8 // zoom level multiplicator (number)
    });
	
	});
	})(jQuery);