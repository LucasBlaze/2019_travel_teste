$(function(){
	var Main = {
		init : function(){
			Main.bind.init.call();
		},
		cache : {
			menuIcon: $('.s-index-header__menu-icon'),
			nav: $('.c-nav'),
			menuItem: $('.c-nav__list-item'),
			slider: $('.c-slider__container')
		},
		bind : {
			init: function(){
				
				Main.cache.menuIcon.click(function(){
					Main.functions.toggleMenu.call();
				});
				
				Main.cache.menuItem.click(function(){
					Main.functions.toggleSubMenu.call(this);
				});

				Main.functions.initSlider.call();

			},
		},
		functions : {
			toggleMenu: function(){
				Main.cache.menuIcon.toggleClass('open');
				Main.cache.nav.toggleClass('open');
			},
			toggleSubMenu: function(){
				$(this).toggleClass('open').next('.c-nav__hidden-list').slideToggle();
			},
			initSlider: function(){
				Main.cache.slider.slick({
					dots: false,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear',
					prevArrow: $('.slider__arrow--prev'),
					nextArrow: $('.slider__arrow--next')
				});	
			}
			

		}
	}

	Main.init.call();
});