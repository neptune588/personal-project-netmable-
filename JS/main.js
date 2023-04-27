$(function () {
	$('.hot_game').slick({
		responsive: [{
				breakpoint: 769,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					autoplay: true,
					draggable: true,
				},
			},
			{
				breakpoint: 9999,
				settings: {
					autoplay: true,
					variableWidth: true,
					settings: "unslick",
				},
			},
		],
	});
	$('.visual_main').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
	});
	$(window).scroll(function () {
		let windowScroll = $(window).scrollTop();
		if (windowScroll >= 300) {
			$('.top_btn').fadeIn(500)
		} else {
			$('.top_btn').fadeOut(500)
		}
	});
	$('.top_btn a').on('click', function (e) {
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: 0,
		}, 500);
	});
	$('.header .menu_btn_on').click(function () {
		$('.header .main_menu_list_ex').animate({
			left: 0,
		}, 1);
		$('.header .main_menu_list_ex .main_menu_list_bar').animate({
			left: 0,
		}, 200);
	});
	$('.header .menu_btn_off').click(function () {
		$('.header .main_menu_list_ex').animate({
			left: '-100%',
		}, 10);
		$('.header .main_menu_list_ex .main_menu_list_bar').animate({
			left: '-100%',
		}, 200);
	});
	$('.game_list_click01').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open01').slideToggle(300);
	});
	$('.game_list_click02').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open02').slideToggle(300);
	});
	$('.game_list_click03').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open03').slideToggle(300);
	});
	$('.game_list_click04').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open04').slideToggle(300);
	});
	$('.game_list_click05').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open05').slideToggle(300);
	});
	$('.game_list_click06').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open06').slideToggle(300);
	});
	$('.game_list_click07').click(function () {
		$(this).toggleClass('icon_active');
		$('.game_list_open07').slideToggle(300);
	});
	$('.main_pop_up_ex .main_pop_up .pop_up_close_list .close').on('click', function () {
		$('.main_pop_up_ex').fadeOut(300);
	})
	$('.sort_btn_design').on('change', function () {
		let valReturn = $(this).val();
		if (valReturn === 'defalut') {
			$('.view_weight').css('fontWeight', "");
			$('.latest_weight').css('fontWeight', "");
			$('.net_tube_bgbox .bgbox_list').append(function () {
				return $(this).children().sort(function (a, b) {
					return $(a).attr('data-defalut') - $(b).attr('data-defalut');
				});
			});
		}
		if (valReturn === 'views') {
			$('.latest_weight').css('fontWeight', "");
			$('.view_weight').css('fontWeight', 700);
			$('.net_tube_bgbox .bgbox_list').append(function () {
				return $(this).children().sort(function (a, b) {
					return $(b).attr('data-views') - $(a).attr('data-views');
				});
			});
		}
		if (valReturn === 'latest') {
			$('.view_weight').css('fontWeight', "");
			$('.latest_weight').css('fontWeight', 700);
			$('.net_tube_bgbox .bgbox_list').append(function () {
				return $(this).children().sort(function (a, b) {
					return $(b).attr('data-lastest_date') - $(a).attr('data-lastest_date');
				});
			});
		}
	});
	//hotWeeklyGameAni script//
	const eleHeight = $('.real_time_bar .frame ul li').innerHeight();

	//hotWeeklyGameAni 동작함수
	function hotWeeklyGameAni() {
		$('.real_time_bar .frame ul').animate({
			top: eleHeight * -1,
		}, 1000, function () {
			$(this).children('li:first').insertAfter($(this).children('li:last'));
			$(this).css('top', 0);
		})
		$('.real_time_bar .frame ul').delay(300);
	}
	//hotWeeklyGameAni 무한호출
	setInterval(hotWeeklyGameAni);
});