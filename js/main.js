/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $("#container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================


    $(".bgwrap").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.main_img_btn_prev'), //이전 화살표
        nextArrow: $('.main_img_btn_next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });



    $(".top_shopping").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.wrap_btn_prev_01'), //이전 화살표
        nextArrow: $('.wrap_btn_next_01'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        slidesToShow: 1, //보여질 슬라이드 갯수
        asNavFor:'.top_shopping_text,.top_shopping_02', //다른 슬라이드 연동 여부
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });


    $(".top_shopping_text, .top_shopping_02").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        autoplay:true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor:'.top_shopping', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });

    $(".shopping_02").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.wrap_btn_prev_02'), //이전 화살표
        nextArrow: $('.wrap_btn_next_02'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
        asNavFor: "shopping_text, .shopping", //다른 슬라이드 연동 여부


    });

    $(".shopping_text, .shopping").slick({
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.wrap_btn_prev_02'), //이전 화살표
        nextArrow: $('.wrap_btn_next_02'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor:'.shopping, .shopping_02', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });



    $(".section04_ra").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('.main_img_btn_prev'), //이전 화살표
        // nextArrow: $('.main_img_btn_next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#sc04_txt_slider', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });


    $("#sc04_txt_slider").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('.main_img_btn_prev'), //이전 화살표
        // nextArrow: $('.main_img_btn_next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: true, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '.section04_ra', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });


    $(".section05_ra").slick({
        dots: false, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        // prevArrow: $('.main_img_btn_prev'), //이전 화살표
        // nextArrow: $('.main_img_btn_next'), //다음 화살표
        autoplay:true, //자동넘김
        autoplaySpeed: 4000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '#sc05_txt_slider', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: false, //스와이프
        focusOnSelect: false, //슬라이드 선택시 넘어
        draggable:false,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    });







//==============================================================
});







