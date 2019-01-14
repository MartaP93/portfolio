// SIDE BAR

var button = document.getElementById("side-bar");

function toggleSidebar() {
    button.classList.toggle('active');
}

button.onclick = toggleSidebar;

// OPACITY CHANGE ON SCROLL
var photo3 = $('#photo-container3');
var photo4 = $('#photo-container4');
var photo5 = $('#photo-container5');
var photo6 = $('#photo-container6');
var photo7 = $('#photo-container7');
var photo8 = $('#photo-container8');
var photo9 = $('#photo-container9');
var photo10 = $('#photo-container10');
var win = $(window);
var doc = $(document);

doc.ready(function () {
    // console.log(win.scrollTop());
    win.scroll(function () {
        console.log(win.scrollTop());
        if (($(this).scrollTop() > 200) && ($(this).scrollTop() < 900)) {
            photo3.css({ "opacity": "1" })
            photo4.css({ "opacity": "1" })
            photo5.css({ "opacity": "1" })
        } else if (($(this).scrollTop() >= 900) && ($(this).scrollTop() < 1300)) {
            photo6.css({ "opacity": "1" })
        } else if (($(this).scrollTop() >= 1300) && ($(this).scrollTop() < 1700)) {
            photo7.css({ "opacity": "1" })
            photo8.css({ "opacity": "1" })
        } else if ($(this).scrollTop() > 1700) {
            photo9.css({ "opacity": "1" })
            photo10.css({ "opacity": "1" })
        } else {
            photo3.css({ "opacity": "0.4" })
            photo4.css({ "opacity": "0.4" })
            photo5.css({ "opacity": "0.4" })
            photo6.css({ "opacity": "0.4" })
            photo7.css({ "opacity": "0.4" })
            photo8.css({ "opacity": "0.4" })
            photo9.css({ "opacity": "0.4" })
            photo10.css({ "opacity": "0.4" })
        };
    })
})