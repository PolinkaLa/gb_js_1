"use strict";
//task 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - сначала выполняется инкремент, а потом присваивание
d = b++; alert(d); // 1 - сначала выполняется присваивание, а потом инкремент
c = (2 + ++a); alert(c); // 5 - а уже было инкрементирование, еще раз инкремент и плюс два, в итоге 2 + 3
d = (2 + b++); alert(d); // 4 - b - уже было инкрентировано, сначала выполнится сложение с двойком, а потом инкремет
alert(a); // 3 - инкремент выполился два раза, префиксная форма
alert(b); // 3 - инкремент выполился два раза, постфикстаная форма

//task 2
var a = 2;
var x = 1 + (a *= 2);
// x = 5 , var x = 1 + (a = a * 2);

//task 3
var a = 5;
var b = -55;
if (a > 0 && b > 0) {
    console.log(a - b)
}
else if (a < 0 && b < 0) {
    console.log(a * b)
}
else {
    console.log(a + b)
}

// task 4
var a = Math.round(Math.random() * 15 + 0);
console.log(a);
switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}