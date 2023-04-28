$(function () {
    $(window).scroll(function () {
        const headerHeight = $('.header_ex').innerHeight();
        let windowScroll = $(window).scrollTop();
        if (windowScroll >= headerHeight) {
            $('.header_ex').addClass('fixed');
        } else {
            $('.header_ex').removeClass('fixed');
        }

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

    $('.game_list_click').on('click', function () {
        $(this).toggleClass('icon_active');
        $(this).next('.toggle_slide').slideToggle(300);
    });

    $('.game_list_btn a').on('click', function () {
        $('.game_list_btn a').removeClass('tab_on');
        $(this).addClass('tab_on');
    });

    $('.game_list_btn a').on('click', function () {
        $('.game_list_btn a').removeClass('tab_on');
        $(this).addClass('tab_on');
    });

    /*     $('.game_list_click01').click(function () {
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

        $('.game_list_btn a').on('click', function(){
            $('.game_list_btn a').removeClass('tab_on');
            $(this).addClass('tab_on');
        })
     */



    //game_container .box more기능
    /*     원리
        박스 안의 요소를 전부 숨긴다.
        그리고 추출메서드 slice를 사용하여 지정해 6개까지만 나타나게한다.
        그리고 버튼을 눌렀을시 :hidden을 사용하여 숨겨져있는 요소를 6개씩 계속 나오게 해주면 된다. */
    $('.contents .box').mouseover(function(){
        $('.contents .box').removeClass('box_hover');
        $(this).addClass('box_hover');
    });
    if ($(window).innerWidth() > 599) {
        let boxReturn = '';
        $('.all').on('click', function () {
            $('.box').css('display', 'block');
            $('.box').css('marginRight', '5px');
            $('.box:nth-child(3n)').css('marginRight', 0);
        })

        $('.rpg').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'rpg') {
                $('.game_container .box[data-game~="rpg"]').css('display', 'block');
                $('.game_container .box:not([data-game~="rpg"])').css('display', 'none');
                $('.box05').css('marginRight', 0);
                $('.box06').css('marginRight', '5px');
                $('.box08').css('marginRight', 0);
                $('.box09').css('marginRight', '5px');
                $('.box12').css('marginRight', 0);
                $('.box16').css('marginRight', 0);
                $('.box18').css('marginRight', '5px');
            }
        })

        $('.strategy').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'strategy') {
                $('.game_container .box[data-game~="strategy"]').css('display', 'block');
                $('.game_container .box:not([data-game~="strategy"])').css('display', 'none');
                $('.box18').css('marginRight', '5px');
            }
        })

        $('.action').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'action') {
                $('.game_container .box[data-game~="action"]').css('display', 'block');
                $('.game_container .box:not([data-game~="action"])').css('display', 'none');
                $('.box08').css('marginRight', '5px');
            }
        })

        $('.puzzle').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn === 'puzzle') {
                $('.game_container .box[data-game~="puzzle"]').css('display', 'block');
                $('.game_container .box:not([data-game~="puzzle"])').css('display', 'none');
            } 
        })

        $('.sports').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'sports') {
                $('.game_container .box[data-game~="sports"]').css('display', 'block');
                $('.game_container .box:not([data-game~="sports"])').css('display', 'none');
                $('.box03').css('marginRight', '5px');
                $('.box16').css('marginRight', '5px');
            }
        })

        $('.card').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'card') {
                $('.game_container .box[data-game~="card"]').css('display', 'block');
                $('.game_container .box:not([data-game~="card"])').css('display', 'none');
                $('.box26').css('marginRight', 0);
            } 
        })
    }
    if ($(window).innerWidth() > 768) {
        let boxReturn = '';
        $('.all').on('click', function () {
            $('.box').css('display', 'block');
            $('.box').css('marginRight', '10px');
            $('.box:nth-child(3n)').css('marginRight', 0);
        })

        $('.rpg').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'rpg') {
                $('.game_container .box[data-game~="rpg"]').css('display', 'block');
                $('.game_container .box:not([data-game~="rpg"])').css('display', 'none');
                $('.box05').css('marginRight', 0);
                $('.box06').css('marginRight', '10px');
                $('.box08').css('marginRight', 0);
                $('.box09').css('marginRight', '10px');
                $('.box12').css('marginRight', 0);
                $('.box16').css('marginRight', 0);
                $('.box18').css('marginRight', '10px');
            }
        })

        $('.strategy').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'strategy') {
                $('.game_container .box[data-game~="strategy"]').css('display', 'block');
                $('.game_container .box:not([data-game~="strategy"])').css('display', 'none');
                $('.box18').css('marginRight', '10px');
            }
        })

        $('.action').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'action') {
                $('.game_container .box[data-game~="action"]').css('display', 'block');
                $('.game_container .box:not([data-game~="action"])').css('display', 'none');
                $('.box08').css('marginRight', '10px');
            }
        })

        $('.puzzle').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn === 'puzzle') {
                $('.game_container .box[data-game~="puzzle"]').css('display', 'block');
                $('.game_container .box:not([data-game~="puzzle"])').css('display', 'none');
            } 
        })

        $('.sports').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'sports') {
                $('.game_container .box[data-game~="sports"]').css('display', 'block');
                $('.game_container .box:not([data-game~="sports"])').css('display', 'none');
                $('.box03').css('marginRight', '10px');
                $('.box16').css('marginRight', '10px');
            }
        })

        $('.card').on('click', function () {
            boxReturn = $('.game_container .box').attr('data-game');
            if (boxReturn !== 'card') {
                $('.game_container .box[data-game~="card"]').css('display', 'block');
                $('.game_container .box:not([data-game~="card"])').css('display', 'none');
                $('.box26').css('marginRight', 0);
            } 
        })
    }

});