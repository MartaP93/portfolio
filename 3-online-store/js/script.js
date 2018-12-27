"use strict"

let button = Array.from(document.querySelectorAll(".add-to-basket"));
let image = Array.from(document.querySelectorAll("img"));
let name = Array.from(document.querySelectorAll(".name"));

function addToBasket(i) {
    console.log(button[i]);


    // console.log(button);

}

button.forEach(addEventListener('click', addToBasket));
// addToBasket();