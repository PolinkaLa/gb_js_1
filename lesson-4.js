"use strict";
//task 1
var number = prompt("Введи число от 1 до 999 включительно");

if (isNaN(number)) {
    alert("Вы введил недопустимые символы")
}
else {
    var numberArr = number.split(''); 
    var numObj = {};
    console.log(parseNumber(numberArr));
}

function parseNumber(arr) {
    
    if (arr.length <= 3) {
        if (arr.length == 3) {
            numObj.h = arr[0];
            numObj.d = arr[1];
            numObj.e = arr[2];
        }
        if (arr.length == 2) {
            numObj.d = arr[0];
            numObj.e = arr[1];
        }
        if (arr.length == 1) {
            numObj.e = arr[0];
        }
    }
    else {
        return numObj;
    }
}