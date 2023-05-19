"use strict";
$(document).ready(function () {





    $('.btn').click(function (e) { 
        e.preventDefault();
        if(!$trim($('input').val())== " "){
            let a = b => {
                for (let i = 0; i<b; i++) {$('.minibox').append(`<h2>${b}</h2>`)};
            }
            
            let h = p => {
                for (let i = 0; i<b; i++) {$('.minibox').append(`<h2>${p}</h2>`)};
            }
        }
    });







});