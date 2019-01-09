var event, ok, balance;
balance = 0;
var i = 0;
for (var i in works) {
    ok = false;
    event = +prompt(works[i].question + works[i].answer1 + works[i].answer2 + works[i].answer3 + works[i].answer4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works[i], event);
        if (!ok) {
            break;
        }
    }
}

alert('Спасибо за игру \nВаш выигрыш - ' + balance);

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q.answerCount) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    if (event == q.correctAnswer) {
        balance = q.cost;
        return true;
    }
    return false;
}