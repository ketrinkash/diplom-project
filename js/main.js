$(document).ready(function($) {

	//var $preloader = $('#page-preloader'),
	//$spinner   = $preloader.find('.');
	//$spinner.fadeOut();
	//$preloader.delay(350).fadeOut('slow');

	// Slider
	if($('#news').length) {
		var mySwiper = new Swiper ('.swiper-container', {
			navigation : {
				nextEl : ".swiper-button-next",
				prevEl : ".swiper-button-prev",
			},
			slidesPerView : 1,
			observer: true,
			breakpoints: {
				320:{
					slidesPerView : 1
				},
				768:{
					slidesPerView : 2
				},
				1200:{
					slidesPerView : 3
				}
			}
		});	
	}




});


/* Прибитая шапка */

$(window).on('scroll load resize',function(){
    var pixel = $(window).scrollTop();
	if(pixel > 0 && $(document).width() > 998) {
		$('header nav').addClass('active-head');
	} else if(pixel < 1) {
		$('header nav').removeClass('active-head');
	}
})

/* Hamburger */

$('.burger').on('click', function(event){
	event.preventDefault();
    $('.menu-mobile').toggle();
	$('body').css({'overflow' : 'hidden'});
})

$('#close').on('click', function(event){
	
	$('.menu-mobile').hide();
	$('body').css({'overflow' : 'visible'});
})

$('.menu-mobile').on('click', function(e) {
	e.preventDefault();
	if ($(e.target).closest('.mobile-wrap').length == 0) {
		$(this).fadeOut();		
		$('body').css({ "overflow" : "visible"});			
	}
});


$('#index').on('click', function(){
    var url = "index.html";
    $(location).attr('href',url);
})

$('#company').on('click', function(){
    var url = "company.html";
    $(location).attr('href',url);
})

/* Модалка */

$('.offer__btn, .phone__icon, .phone__line, .help-btn, .connect-btn').on('click', function(event) {
	event.preventDefault();
	$('.modal').fadeIn();
	$('body').css({ "overflow" : "hidden"});
});	

$('.modal__close').on('click', function(event) {
	event.preventDefault();
	$(this).parents('.modal').fadeOut();
	$('body').css({ "overflow" : "visible"});
});		

// Закрытие по клавише Esc.
$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		e.stopPropagation();
		$('.modal').fadeOut();
		$('body').css({ "overflow" : "visible"});
	}
});

// Клик по фону, но не по окну
$('.modal').on('click', function(e) {
	e.preventDefault();
	if ($(e.target).closest('.modal__wrap').length == 0) {
		$(this).fadeOut();		
		$('body').css({ "overflow" : "visible"});			
	}
});

/* Проверка формы на валидность */

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input."
);

$(".modal__form").validate({
rules: {
    firstName: {
        required: true,
        regex : "[А-Яа-я]{1,32}"   
    },
    phoneNumber: {
        digits : true,
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"
    }
},
messages: {
    firstName: "Введите ваше имя правильно",
    phoneNumber: "Введите ваш номер"
}
});

/* TABS при клике (контент должен меняться), в разборе есть плагин от Василисы для табов*/

$('.mobile-list__item').hover(function(){
    var currTab = $(this).parent().index();
    $('.mobile-list__item').removeClass('mobile-list__item_active ');
    $(this).addClass('mobile-list__item_active ');
});


$('.btn-list__item').hover(function(){
    var currTab = $(this).parent().index();
    $('.btn-list__item').removeClass('active-tab');
    $(this).addClass('active-tab');
});