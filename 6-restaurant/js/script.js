'use strict';

var win = $(window);
var doc = $(document);
var nav = $('#nav-bar');

doc.ready(function () {
    win.scroll(function () {
        // console.log(win.scrollTop());
        if (win.scrollTop()) {
            // nav.css({ 'background-color': 'rgb(38,38,38)' })
            nav.addClass("bar-scroll");
        } else {
            nav.removeClass("bar-scroll");
        }
    })
})
