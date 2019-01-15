// SIDE BAR

var button = document.getElementById("side-bar");

function toggleSidebar() {
    button.classList.toggle('active');
}

button.onclick = toggleSidebar;

// OPACITY CHANGE ON SCROLL
var photo1 = $('#photo-container1');
var photo2 = $('#photo-container2');
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
        if (win.width > 768) {
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
        } else {
            if (($(this).scrollTop() > 200) && ($(this).scrollTop() < 500)) {
                photo2.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 500) && ($(this).scrollTop() < 800)) {
                photo3.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 800) && ($(this).scrollTop() < 1200)) {
                photo4.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 1200) && ($(this).scrollTop() < 2200)) {
                photo5.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 2200) && ($(this).scrollTop() < 2700)) {
                photo6.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 2700) && ($(this).scrollTop() < 3000)) {
                photo7.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 3000) && ($(this).scrollTop() < 3400)) {
                photo8.css({ "opacity": "1" })
            } else if (($(this).scrollTop() >= 3400) && ($(this).scrollTop() < 3600)) {
                photo9.css({ "opacity": "1" })
            } else if ($(this).scrollTop() >= 3600) {
                photo10.css({ "opacity": "1" })
            } else {
                photo2.css({ "opacity": "0.4" })
                photo3.css({ "opacity": "0.4" })
                photo4.css({ "opacity": "0.4" })
                photo5.css({ "opacity": "0.4" })
                photo6.css({ "opacity": "0.4" })
                photo7.css({ "opacity": "0.4" })
                photo8.css({ "opacity": "0.4" })
                photo9.css({ "opacity": "0.4" })
                photo10.css({ "opacity": "0.4" })
            };
        }
    })
})