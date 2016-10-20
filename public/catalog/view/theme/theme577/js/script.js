var gl_path = jQuery('#gl_path').html();
function include(scriptUrl) {
    document.write('<script src="catalog/view/theme/' + gl_path + '/' + scriptUrl + '"></script>');
}

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);


/* Stick up menus
 ========================================================*/

;
(function ($) {
    var o = $('html');
    var menu = $('#stuck');
    if (o.hasClass('desktop') && menu.length) {
        include('js/scrollfix.js');

        $(window).load(function () {
            menu.scrollFix({
                style: false
            });
        });
    }
})(jQuery);

/* Unveil
 ========================================================*/
;
(function ($) {
    var o = $('.lazy img');

    if (o.length > 0) {
        include('js/jquery.unveil.js');

        $(document).ready(function () {
            $(o).unveil(0, function () {
                $(this).load(function () {
                    $(this).parent().addClass("lazy-loaded");
                })
            });
        });

        $(window).load(function () {
            $(window).trigger('lookup.unveil');
            if ($('.nav-tabs').length){
                $('.nav-tabs').find('a[data-toggle="tab"]').click(function () {
                    setTimeout(function () {
                        $(window).trigger('lookup.unveil');
                    }, 400);
                })
            }
        });

    }
})(jQuery);

/* Magnificent
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    if (o.length > 0) {
        include('js/magnificent/jquery.ba-throttle-debounce.js');
        include('js/magnificent/jquery.bridget.js');
        include('js/magnificent/magnificent.js');

        $(document).ready(function () {

            o.find('li:first-child a').addClass('active');

            $('#product-image').bind("click", function (e) {
                var imgArr = [];
                o.find('a').each(function () {
                    img_src = $(this).data("image");

                    //put the current image at the start
                    if (img_src == $('#product-image').find('img').attr('src')) {
                        imgArr.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    else {
                        imgArr.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                });
                $.fancybox(imgArr);
                return false;
            });


            o.find('[data-image]').click(function (e) {
                e.preventDefault();
                o.find('.active').removeClass('active');
                var img = $(this).data('image');
                $(this).addClass('active');
                $('#product-image').find('.inner img').each(function () {
                    $(this).attr('src', img);
                })
            })

        });

    }
})
(jQuery);


/* Toggle
 ========================================================*/

(function ($) {
    var o = $('.toggle');
    $(document).ready(function () {
        $(document).on("click",".toggle",function (e) {
            e.preventDefault();
            var tmp = $(this);
            o.each(function () {
                if ($(this).parent().hasClass('active') && !$(this).is(tmp)){
                    $(this).parent().find('.toggle_cont').slideToggle();
                    $(this).parent().removeClass('active');
                }
            });           
           
            $('.cart').removeClass('open');
			$(this).parent().toggleClass('active');
            $(this).parent().find('.toggle_cont').slideToggle();	
			
        });
		
		$(document).mouseup(function (e) {
			var container = $('.toggle-wrap');
			if (container.has(e.target).length === 0 && container.hasClass('active') && !$(this).is(container)){
				container.find('.toggle_cont').slideToggle();
				container.removeClass('active');
			}
		});
		
    });
})(jQuery);

/* Bx Slider
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    var o2 = $('#gallery');
    if (o.length || o2.length) {
        include('js/jquery.bxslider/jquery.bxslider.js');
    }

    if (o.length) {
        $(document).ready(function () {
            $('#image-additional').bxSlider({
                mode: 'vertical',
                pager: false,
                controls: true,
                slideMargin: 13,
                minSlides: 5,
                maxSlides: 5,
                slideWidth: 99,
                nextText: '<i class="fa fa-chevron-down"></i>',
                prevText: '<i class="fa fa-chevron-up"></i>',
                infiniteLoop: false,
                adaptiveHeight: true,
                moveSlides: 1
            });
        });
    }

    if (o2.length) {
        include('js/photo-swipe/klass.min.js');
        include('js/photo-swipe/code.photoswipe.jquery-3.0.5.js');
        include('js/photo-swipe/code.photoswipe-3.0.5.min.js');
        $(document).ready(function () {
            $('#gallery').bxSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 1,
                infiniteLoop: false,
                moveSlides: 1
            });
        });
    }

})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.quickview');
    var o2 = $('#default_gallery');
    if (o.length > 0 || o2.length > 0) {
        include('js/fancybox/jquery.fancybox.js');
    }

    if (o.length) {
        $(document).ready(function () {
            o.fancybox({
                maxWidth: 800,
                maxHeight: 600,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'elastic',
                closeEffect: 'elastic'
            });
        });
    }

})(jQuery);

/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
    $(window).load(function () {
        $('#tm_menu .menu').superfish();
    });
})(jQuery);

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.related-slider');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                // Most important owl features
                items: 4,
                itemsCustom: false,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [991, 3],
                itemsTablet: [767, 2],
                itemsTabletSmall: false,
                itemsMobile: [480, 1],

                // Navigation
                pagination: false,
                navigation: true,
                navigationText: ['<i class="material-design-keyboard54"></i>', '<i class="material-design-keyboard53"></i>'],
            });
        });
    }
})(jQuery);

/* Box Carousel
 ========================================================*/
;
(function ($) {
    var o = $('#content .box-carousel');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                // Most important owl features
	items : 4,
	itemsCustom : false,
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [991,3],
	itemsTablet: [767,2],
	itemsTabletSmall: [600,2],
	itemsMobile : [480,1],

	// Navigation
    pagination: false,
	navigation : true,
	navigationText: ['<i class="material-design-keyboard54"></i>', '<i class="material-design-keyboard53"></i>'],

                
            });
        });
    }
})(jQuery);

/* GREEN SOCKS
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.find('body').hasClass('common-home')) {
        include('js/greensock/jquery.gsap.min.js');
        include('js/greensock/TimelineMax.min.js');
        include('js/greensock/TweenMax.min.js');
        include('js/greensock/jquery.scrollmagic.min.js');

        function listBlocksAnimate(block, element, row, offset, difEffect) {
		if ($(block).length) {
			var i = 0;
			var j = row;
			var k = 1;
			var effect = -1;

			$(element).each(function () {
				i++;

				if (i > j) {
					j += row;
					k = i;
					effect = effect * (-1);
				}

				if (effect == -1 && difEffect == true) {
					ef = TweenMax.from(element + ':nth-child(' + i + ')', 1.5, {
						left: 200,
						alpha: 0,
						ease: Power1.easeOut
					})

				} else {
					ef = TweenMax.from(element + ':nth-child(' + i + ')', 1.5, {
						right: 200,
						alpha: 0,
						ease: Power1.easeOut
					})
				}

				var scene_new = new ScrollScene({
					triggerElement: element + ':nth-child(' + k + ')',
					offset: offset,
				}).setTween(ef)
					.addTo(controller)
					.reverse(false);
			});
		}}

        function listTabsAnimate(element) {
            if ($(element).length) {
                TweenMax.staggerFromTo(element, 0.3, {alpha: 0, rotationY: -90, ease: Power1.easeOut}, {
                    alpha: 1,
                    rotationY: 0,
                    ease: Power1.easeOut
                }, 0.1);
            }
        }

        $(document).ready(function () {
            controller = new ScrollMagic();
        });
		
		$(window).load(function () {	
	   
			listBlocksAnimate('.box.featured', '.box.featured .owl-item', 1, -200, true);
			listBlocksAnimate('.box.specials', '.box.specials .owl-item', 1, -400, true);
	   
			if ($(".banners").length) {
                var welcome = new TimelineMax();            
                welcome.from(".banners.row > div:nth-child(1)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(2)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(3)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(4)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(5)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(6)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(7)", .3, {scale: .1, autoAlpha: 0})
				.from(".banners.row > div:nth-child(8)", .3, {scale: .1, autoAlpha: 0});            
				var scene_welcome = new ScrollScene({
                    triggerElement: ".banners",
                    offset: -100
                }).setTween(welcome).addTo(controller).reverse(false);
            }			
			
        });
       
    }
})(jQuery);

/* Swipe Menu
 ========================================================*/
;
(function ($) {
    $(document).ready(function () {
        $('#page').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                return false
            }
        })

        $('.swipe-control').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                $(this).removeClass('active');
                return false
            }
            else {
                $(this).parents('body').addClass('ind');
                $(this).addClass('active');
                return false
            }
        })
    });

})(jQuery);

/*=======================================================*/

/*********************************************/
jQuery(document).ready(function(){
	
	jQuery('.box.featured .product-thumb').hover(function(){
		$('.box.featured').css('z-index', '2');	}, function(){
		$('.box.featured').css('z-index', '1');
})
})
jQuery(document).ready(function(){
	
	jQuery('.box.specials .product-thumb').hover(function(){
		$('.box.specials').css('z-index', '2');	}, function(){
		$('.box.specials').css('z-index', '1');
})
})
jQuery(document).ready(function(){
	
	jQuery('.block-grid .product-thumb').hover(function(){
		$('.block-grid').css('z-index', '2');	}, function(){
		$('.block-grid').css('z-index', '1');
})
})

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

$(document).ready(function () {
    /***********CATEGORY DROP DOWN****************/
	 
    $(".menu-icon").on("click", function () {
        $(".menu-gadget .menu").slideToggle();
        $(this).toggleClass("active");
    });
    $('.menu-gadget .menu').find('li > ul').before('<i class="material-design-drop25"></i>').parent('li').addClass('parent');
    $('.menu-gadget .menu li i').on("click", function () {
        if ($(this).hasClass('material-design-drop27')) {
            $(this).removeClass('material-design-drop27').parent('li').find('> ul').slideToggle().parent('li').removeClass('open-menu');
        }
        else {
            $(this).addClass('material-design-drop27').parent('li').find('> ul').slideToggle().parent('li').addClass('open-menu');
        }
    });
	
	$(document).mouseup(function (e) {
			var container = $('.menu-gadget');
			if (container.has(e.target).length === 0 && container.find('.menu-icon').hasClass('active') && !$(this).is(container)){
				container.find('.menu').slideToggle();
				container.find('.menu-icon').removeClass('active');
			}
		});
	
	$('#cart .total tbody tr').last().addClass('last');
	
    if ($('.breadcrumb').length) {
		$('.breadcrumb li').last().addClass('last');
        var o = $('.breadcrumb li:last-child');
        var str = o.find('a').html();
        o.find('a').css('display', 'none');
        o.append('<span>' + str + '</span>');
    }
		
});

$(document).ready(function () {
    $(".menu-top > span").on("click", function () {
        $(".menu-top #tm_menu").slideToggle();
        $(this).toggleClass("active");
    });   
});

var flag = true;

function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if ($('aside').length) {
        var leftColumn = $('aside');
    } else {
        return false;
    }


    if (width > 767) {
        if (!flag) {
            flag = true;
            leftColumn.insertBefore('#content');
            $('.col-sm-3 .box-heading').unbind("click");

            $('.col-sm-3 .box-content').each(function () {
                if ($(this).is(":hidden")) {
                    $(this).slideToggle();
                }
            })
        }
    } else {
        if (flag) {
            flag = false;
            leftColumn.insertAfter('#content');

            $('.col-sm-3 .box-content').each(function () {
                if (!$(this).is(":hidden")) {
                    $(this).parent().find('.box-heading');
                }
            });

            $('.col-sm-3 .box-heading').bind("click", function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().find('.box-content').slideToggle();
                }
                else {
                    $(this).addClass('active');
                    $(this).parent().find('.box-content').slideToggle();
                }
            })
        }
    }
}

$(window).load(respResize);
$(window).resize(function () {
    clearTimeout(this.id);
    this.id = setTimeout(respResize, 500);
});

