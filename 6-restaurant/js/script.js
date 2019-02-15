'use strict';


// SMOOTH SCROLL
var nav = $('.nav-bar');

$(document).ready(function () {
    $(window).scroll(function () {
        // console.log(win.scrollTop());
        if ($(window).scrollTop()) {
            // nav.css({ 'background-color': 'rgb(38,38,38)' })
            nav.addClass("nav-bar-scroll");
        } else {
            nav.removeClass("nav-bar-scroll");
        }
    });

    nav.localScroll();
})