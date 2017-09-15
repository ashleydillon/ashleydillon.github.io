(function($) {

	$(document).on('ready', function() {
		initCustomForms();
		initValid();
		initMobMenu();
		initSmoothScroll();
		initLeaveSite();
		initCliskCloseMobMenu();
		initMultiselectInputValue();
	});

	$(window).on('load scroll', function() {
		initShowBockOnScroll();
	});

	function initMultiselectInputValue() {

		var multiSelDefaultValue = $('.jcf-compact-multiple .jcf-select-text span').text();

		$('#47102_108761pi_47102_108761').on('change', function() {

			console.log($(this).val())

			if($(this).val().length) {
				var listValue = $('.jcf-compact-multiple .jcf-select-text span').text().replace(/Want more info on our solutions,/gi, '');
				$('.jcf-compact-multiple .jcf-select-text span').text(listValue)
			} else {
				$('.jcf-compact-multiple .jcf-select-text span').text(multiSelDefaultValue);
			}
		});
	}

	function isTouchDevice() {
		return 'ontouchstart' in window;
	}

	function initCustomForms() {
		jcf.setOptions('Select', {
			wrapNative: false,
			wrapNativeOnMobile: false,
			fakeDropInBody: false,
			useCustomScroll: true,
			multipleCompactStyle: true
		});

		jcf.replaceAll();
	}

	function initValid() {

		jQuery.validator.setDefaults({
			debug: true,
			success: 'valid'
		});

		$('#pardot-form').validate();
	}

	function initMobMenu() {

		$('#toggle').on('click', function() {

			$(this).toggleClass('active');

			$('.nav-header').toggleClass('open');

		});

		if(! isTouchDevice() ) {

			$('.nav-header-list li:not(.accent-link)').hover(function() {
				$(this).addClass('active');
				$(this).children('.drop-menu-holder').stop(true, false).slideDown();
			}, function() {
				$(this).removeClass('active');
				$(this).children('.drop-menu-holder').stop(true, false).slideUp();
			});

		} else {
			$('.nav-header-list li').has('.drop-menu-holder').on('touchstart', function(e) {
				if(! $(this).hasClass('active') ) {
					e.preventDefault();
					$(this).siblings().removeClass('active');
					$(this).siblings().children('.drop-menu-holder').slideUp();
					$(this).addClass('active');
					$(this).children('.drop-menu-holder').slideDown();
				}
			});

			$(document).on('touchstart', function(event) { 
				if(!$(event.target).closest('.nav-header-list').length) {
					$('.drop-menu-holder').slideUp();
					$('.nav-header-list li').removeClass('active');
				}
			})
		}
	}

	function initShowBockOnScroll() {
		var scrolltop = $(window).scrollTop();
		var heightHeader = $('.header').outerHeight();
		var posBlock = $('#block-about').position().top - heightHeader;
		var popupBlock = $('.popup-header-holder');

		if( scrolltop > posBlock && !popupBlock.hasClass('close') ) {
			$('.popup-header-holder').slideDown();
		}

		$(document).on('click', '.popup-header i,.popup-header .btn, .accent-link > a', function() {
			popupBlock.addClass('close');
			$('.popup-header-holder').slideUp();
		});
	}

	function initSmoothScroll() {
		$('a[href*="#"]')
			.not('[href="#"]')
			.not('[href="#0"]')
			.on('click', function(event) {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

					if (target.length) {
						event.preventDefault();

						$('html, body').animate({
							scrollTop: target.offset().top - $('.header').outerHeight() + 2
						}, 1000, function() {

							var $target = $(target);
							$target.focus();

							if ($target.is(':focus')) {
								return false;
							} else {
								$target.attr('tabindex','-1');
								$target.focus();
							};
						});
					}
				}

				// initShowBockOnScroll();
			});
	}

	function initLeaveSite() {

		$(document).on('click', '#btn-slide-block', function(e) {
			e.preventDefault();
			$('.popup-overlay').addClass('disable');
		});

		$(document).on('click', '#btn-cls', function(e) {
			e.preventDefault();
			$('.popup-overlay').addClass('disable');
		});

		if(! isTouchDevice() ) {
			$(document).on('mouseleave', function(e) {
				if( $(window).width() <= e.offsetX){
				}else{
					$('.popup-overlay').addClass('active');
				}
			});
		}
	}

	function initCliskCloseMobMenu() {

		$('.nav-header-list a').on('click', function() {

			if($('.nav-header').hasClass('open')) {
				$('.nav-header').removeClass('open');
			}

			if( $('.button-container').hasClass('active') ) {
				$('.button-container').removeClass('active');
			}
		});
	}

})(jQuery);






