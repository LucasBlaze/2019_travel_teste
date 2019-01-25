$(function(){
	var Main = {
		init : function(){
			Main.bind.init.call();
		},
		cache : {
			menuIcon: $('.s-index-header__menu-icon'),
			nav: $('.c-nav'),
			menuItem: $('.c-nav__list-item'),
			menuItemContainer: $('.c-nav__item-container'),
			slider: $('.c-slider__container'),
			contactForm: $('.s-contact__form'),
			window: $(window)
		},
		bind : {
			init: function(){

				Main.functions.turnOnMenu.call();

				Main.cache.window.resize(function(){
					Main.cache.menuIcon.off();
					Main.cache.menuItem.off();
					Main.cache.menuItemContainer.off();

					Main.functions.turnOnMenu.call();
				});

				Main.functions.initSlider.call();

				Main.functions.validateForm.call(Main.cache.contactForm);

			},
		},
		functions : {
			turnOnMenu: function(){
				if (Main.cache.window.width() < 1024){
					Main.cache.menuIcon.click(function(){
						Main.functions.toggleMenu.call();
					});	
					Main.cache.menuItem.click(function(){
						Main.functions.toggleSubMenu.call(this);
					});
				}
				else{
					Main.cache.menuItemContainer.on('mouseover', function(){
						Main.functions.mouseOverMenu.call(this);
					});
					Main.cache.menuItemContainer.on('mouseleave', function(){
						Main.functions.mouseLeaveMenu.call(this);
					});
				}
			},
			toggleMenu: function(){
				Main.cache.menuIcon.toggleClass('open');
				Main.cache.nav.toggleClass('open');
			},
			toggleSubMenu: function(){
				$(this).toggleClass('open').next('.c-nav__hidden-list').slideToggle();
			},
			mouseOverMenu: function(){
				$(this).find('.c-nav__list-item').addClass('open');
				$(this).find('.c-nav__hidden-list').addClass('open');
			},
			mouseLeaveMenu: function(){
				$(this).find('.c-nav__list-item').removeClass('open');
				$(this).find('.c-nav__hidden-list').removeClass('open');
			},
			initSlider: function(){
				Main.cache.slider.slick({
					dots: false,
					infinite: true,
					speed: 500,
					fade: true,
					cssEase: 'linear',
					prevArrow: $('.c-slider__arrow--prev'),
					nextArrow: $('.c-slider__arrow--next')
				});	
			},
			validateForm: function(){
				$(this).validate({
					errorPlacement: function(error, element) {

					},
					invalidHandler: function(form, validator){
						$('.msg').removeClass('success').addClass('error').html('Preencha todos os campos destacados');
					},
					highlight: function(element, errorClass) {
						$(element).addClass('error');
						$(element).closest('label').css('border-color', 'red');
					},
					unhighlight: function(element, errorClass) {
						$(element).removeClass('error');
						$(element).closest('label').css('border-color', 'white');
					},
					rules: {
						name: {
							required: true
						},
						email: {
							required: true,
							email: true
						},
						phone:{
							required: true,
							maxlength: 17
						},
						message: {
							required: true
						}
					},
					submitHandler: function(form){
						var success = true;
						if(success){
							$('.msg').removeClass('error').addClass('success').html('Contato enviado com sucesso');
							$(this).reset();
						}
						
					}
				});
			}
			
		}
	}

	Main.init.call();
});