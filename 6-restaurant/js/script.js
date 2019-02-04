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