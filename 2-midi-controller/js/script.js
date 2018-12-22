"use strict";


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const blackKey = document.querySelector(`.black-key[data-key="${e.keyCode}"]`);
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("key-click");
    blackKey.classList.add("black-key-click");
    pad.classList.add("pad-tap");
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("key-click", "black-key-click", "pad-tap"); // removing the class
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const blackKeys = Array.from(document.querySelectorAll(".black-key"));
blackKeys.forEach(blackKey => blackKey.addEventListener('transitionend', removeTransition));

const pads = Array.from(document.querySelectorAll(".pad"));
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));


window.addEventListener("keydown", playSound);


//  counter 4s !!!
