'use strict';

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





// NIE DZIAŁA
var links = $(".link");

// links.each(function () {
//     $(this).on("click", function () {
//         $(this).addClass("active-link")
//     });
// });

links.click(function () {
    $(this).css("color", "");
    $(this).css("color", "rgb(114, 164, 17)");
});