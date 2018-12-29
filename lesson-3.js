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