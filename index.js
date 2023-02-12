
    // var trigger=new _lib_scrolltrigger_min__WEBPACK_IMPORTED_MODULE_9___default.a({trigger:{once:true,offset:{viewport:{x:0,y:0.6}},toggle:{callback:{in:function _in(){var heroContent=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.hero-content');if(heroContent.length>0){setTimeout(function(){heroContent.addClass('is-active');},1750);}}},class:{in:'is-active',out:'is-inactive'}}}});trigger.add('[data-trigger]');jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).foundation();jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function(){var urlParams=new URLSearchParams(window.location.search);var unitParams=urlParams.get('unit');var selectedUnits=[];if(unitParams!=''&&unitParams!=null){selectedUnits=unitParams.split('_');jquery__WEBPACK_IMPORTED_MODULE_0___default()(".staff-directory--container").each(function(index,element){var id=jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("data-staffcontainer-id");if(!selectedUnits.includes(id)){jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hide();}});}
    var heroContent = jQuery(this).find('.hero-content');
    if (heroContent.length > 0) {
        setTimeout(function () {
            heroContent.addClass('is-active');
        }, 1750);
    }
    var shuffleSlider = jQuery('.js-sliderCards')
    shuffleSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log('before');
        slick.$slides.removeClass('slick-adjacent');
        slick.$slides.filter(function (index) {
            console.log(index);
            return index == nextSlide + 1 || index == nextSlide - 1;
        }).addClass('slick-adjacent');
    });
    shuffleSlider.slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        variableWidth: true,
        centerMode: true,
        infinite: false,
    });
    shuffleSlider.on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = jQuery(this).data("slick-index")
        console.log('hell', index);
        if (shuffleSlider.slick('slickCurrentSlide') !== index) {
            shuffleSlider.slick('slickGoTo', index);
        }
    });
    shuffleSlider.each(function () {
        jQuery(this).slick('slickGoTo', Math.floor(jQuery(this)[0].slick.$slides.length / 2));
    });
    (function ($) {
        $(function () {

            //scroll magic

            var controller = new ScrollMagic.Controller();
            //slide up

            $(".__slideup").each(function (i, node) {
                var slideUp = new ScrollMagic.Scene({
                        triggerElement: node,
                        triggerHook: "onEnter",
                        reverse: false,
                        offset: "200px",
                    })
                    .setClassToggle(node, "__active")
                    .addTo(controller);
            });

            $(".__slidein").each(function (i, node) {
                var slideIn = new ScrollMagic.Scene({
                        triggerElement: node,
                        triggerHook: "onEnter",
                        reverse: false,
                        offset: "300px",
                    })
                    .setClassToggle(node, "__active")
                    .addTo(controller);
            });
            $(".__slidemask").each(function (i, node) {
                var slideMask = new ScrollMagic.Scene({
                        triggerElement: node,
                        triggerHook: "onEnter",
                        reverse: false,
                        offset: "300px",
                    })
                    .setClassToggle(node, "__active")
                    .addTo(controller);
            });
            $(".d2-sound").each(function (i, node) {
                var d2Sound = new ScrollMagic.Scene({
                        triggerElement: node,
                        triggerHook: 'onEnter',
                        reverse: false,
                        offset: "300px"
                    })
                    .setClassToggle(node, "s_aniShow")
                    .addTo(controller);
            });
            $("#vid").each(function (i, node) {
                var v = new ScrollMagic.Scene({
                    triggerElement: node,
                    triggerHook: 'onEnter',
                    reverse: false,
                    offset: "300px"
                })
                var video = document.getElementById("vid");
                video.disablePictureInPicture = true;

                // Hiding the scroller while video is playing
                video.onplaying = function () {
                    document.body.style.overflow = 'hidden';
                };
                // Executes only when the video ends
                video.onended = function () {

                    // Enabling the scroller
                    document.body.style.overflow = 'scroll';
                };
            });
            //slick

            slider(".js-slider-simulation");

            function slider(slider) {
                if ($(slider).length > 0) {
                    $(slider).slick({
                        dots: false,
                        infinite: true,
                        speed: 100,
                        slidesToShow: 1,
                        variableWidth: true,
                        focusOnSelect: true,
                        arrows: true,
                    });

                }
            }


            // play video youtube

            $(".js-btn_video").on('click', function () {
                $(".js-video_youtube").find("iframe")[0].src += "?autoplay=1&mute=0";
                $(".js-video_youtube").addClass('is-play');
            });


        });
    })(jQuery);


