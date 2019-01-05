"use strict"

let plus = Array.from(document.querySelectorAll(".plus"));
let minus = Array.from(document.querySelectorAll(".minus"));
var input = $("input");
let myarr = [];



var $inputValues = $(input).map(function() {
    console.log($(this).val());
});

