"use strict";
$.noConflict();
var $ = jQuery;

$(document).ready(function($) {

    /**
     *  Гладкая прокрутка
     *  -----------------------------------------------------------------------
     *  
     */
    $('.scrollbtn a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    /**
     *  Активное меню Js
     *  -----------------------------------------------------------------------
     *  Для раздела Navbar добавление активного в выбранное меню
     */
    $('.navbar-nav li a').on("click", function(e) {
        $('.navbar-nav li').removeClass('active');
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });


    
    $(".navbar-toggle").on("click", function() {
        $(this).toggleClass("active");
        $("#header").toggleClass("headClr");
        $("body").toggleClass("popup-open");
    });

    $('.main-menu ul li a').click(function() {
        $("body").removeClass("popup-open");
        $(".navbar-collapse").removeClass('in');
    });


    
    function resMenu() {
        if ($(window).width() < 1200) {
            $('.main-menu ul li a').on("click", function() {
                $(".navbar-collapse").removeClass("in");
                $(".navbar-toggle").addClass("collapsed").removeClass("active");
                $("#header").removeClass("headClr");
            });
        }
    }
    resMenu();



    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.back-to-top');

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }

        // On scroll header reduce js  
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }

        if ($(window).width() < 767) {
            $("#header").removeClass("fixed");
        }

    });

    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });


    /**
     * Для всех разделов с фоновыми изображениями параллакса
     * 
     * 
     */
    $('.parallax-fix').each(function () {
        if ($(this).children('.parallax-background-img').length) {
            var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.parallax-background-img').remove();
            $(this).css('background-position', '50% 0%');
        }

    });
    var IsParallaxGenerated = false;
    function SetParallax() {
        if ($(window).width() > 1030 && !IsParallaxGenerated) {
            $('.parallaximg').parallax("50%", 0.05);
            $('.parallaximg-2').parallax("50%", 0.01);
            $('.parallaximg-3').parallax("50%", 0.01);
            $('.parallaximg-4').parallax("50%", 0);
            $('.parallaximg-5').parallax("50%", 0);
            $('.parallaximg-6').parallax("50%", 0);
            IsParallaxGenerated = true;
        }
    }

    SetParallax();


    /**
     *  Полная ширина/высота экрана Js
     *  -----------------------------------------------------------------------
     *  
     */
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen-mode").css('min-height', minheight);
        
        var minwidth = $(window).width();
        $(".full-screen-width-mode").css('min-width', minwidth);
    }

    SetResizeContent();

    /**
     *  Равная высота 
     *  -----------------------------------------------------------------------
     *  
     */
    $(".test-video-box").height($(".team-text").height());   


    
    /**
     *  
     *  -----------------------------------------------------------------------
     *  Ползунок раздела «Команда»
     */
    $("#owl-team").owlCarousel({
        navigation: true,
        items:1,
        merge:true,
        loop:true,
        video:true,
        lazyLoad:true,
        center:true,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        pagination: false
    });
})(jQuery, window, document);