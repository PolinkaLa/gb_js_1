var attempts = 0;

generateNumber();
alert(number);
guessNumber();

function generateNumber(){
	number = [];
	var min = 0;
	var max = 9;
	
	for(var i = 0; i < 4; i++){
		var part = Math.round(Math.random() * (max - min)+min);
		
		if(i == 0){
			number[0] = part;
		}
		else{ 
			while(number.indexOf(part) != -1){
				part = Math.round(min + Math.random() * (max - min));
			}
			number[i] = part;
		}
	}
}

function guessNumber(){
	var result = prompt("Введите число (-1 - закончить игру)", 0);
	var gameIsRunning = true;
	
	while(gameIsRunning){
		if(parseInt(result) == -1){
			gameIsRunning = false;
		}

		else if(parseInt(result) == 0 || isNaN(parseInt(result))){
			alert("Вы не ввели число");

			result = prompt("Введите число (-1 - закончить игру)", 0);
		}

		else{
			var answer = checkNumber(result);
			if(answer[0]){

				alert("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts);
				gameIsRunning = false;
			}
			else{

				result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
			}
		}
	}
}

function checkNumber(myresult){//1234
	attempts++;
	
	// массив результата
	// 0 - общий результат
	// 1 - быки
	// 2 - коровы
	var answer = [false, 0, 0];
	
	console.log(myresult);
	console.log(number);
	
	var ranks = myresult.split("");
	
	for(var i = 0; i < ranks.length; i++){		
		if(parseInt(ranks[i]) == number[i]){
			answer[1]++;
		}
		else if(number.indexOf(parseInt(ranks[i])) != -1){
			answer[2]++;
		}
	}
	
	if(answer[1] == 4){
		answer[0] = true;
	}
	return answer;
}