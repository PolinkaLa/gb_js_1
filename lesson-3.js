"use strict";
//task 1
var n = 0;
var i, j;
while (n <= 100) {
    i = 2;
    j = 0;
    while ((i * i <= n) && (j != 1)) {
        if (n % i == 0) {
            j = 1;
        }
        i++;
    }

    if ((j == 0) && (n!=0) ){
        console.log(n);
    }
    n++;
}

//task 2
var m = 0;
do {
    if (m == 0){
        console.log(m + " - это ноль");
    } else if ((m%2)==0) {
        console.log(m + " - это четное число ")
    } else {
        console.log(m + " - это нечетное число ")
    }
    m++;
}
while(m <= 10);

//task 3
for(var i = 0; i <= 9; console.log(i), i++) {};

//task 4
for(var i = 0; i < 19; i++){
    var temp="X";
    for(var j = 0; j <= i; j++) {
        if (i==0) {
            console.log(temp)
        }
        temp=temp+"X"
    }
    console.log(temp);
}