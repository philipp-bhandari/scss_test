var __COMMON = (function() {
    var selectors = {};
    var _init = {
        commonFunctions: function() {
            functions.initDlMenu();
            functions.initModelsBlockSwiper(".car-slider");
        }
    };
    var functions;
    functions = {
        initDlMenu: function() {
            //   $("#dl-menu").dlmenu({});
        },
        initModelsBlockSwiper: function(containerSelector) {
            return new Swiper(containerSelector, {
                slidesPerView: 1,
                spaceBetween: 10,
                // init: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    "@0.00": {
                        slidesPerView: 3
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50
                    }
                }
            });
        }
    };
    return _init;
})();

$(function() {
    $("img.svg_icon").each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
            imgURL,
            function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find("svg");

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr("xmlns:a");

                // Check if the viewport is set, else we gonna set it if we can.
                if (
                    !$svg.attr("viewBox") &&
                    $svg.attr("height") &&
                    $svg.attr("width")
                ) {
                    $svg.attr(
                        "viewBox",
                        "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
                    );
                }

                // Replace image with new SVG
                $img.replaceWith($svg);
            },
            "xml"
        );
    });
});
