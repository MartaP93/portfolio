"use strict";

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const blackKey = document.querySelector(`.black-key[data-key="${e.keyCode}"]`);
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);

    if(!audio) {
        return;
    } else if (!key && !blackKey) {
        pad.classList.add("pad-tap");
    } else if(!pad && !blackKey) {
        key.classList.add("key-click");
    } else if(!key && !pad) {
        blackKey.classList.add("black-key-click");
    };

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    this.classList.remove("key-click", "black-key-click", "pad-tap");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const blackKeys = Array.from(document.querySelectorAll(".black-key"));
blackKeys.forEach(blackKey => blackKey.addEventListener('transitionend', removeTransition));

const pads = Array.from(document.querySelectorAll(".pad"));
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));


window.addEventListener("keydown", playSound);

