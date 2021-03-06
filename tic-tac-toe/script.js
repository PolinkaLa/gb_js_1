var board = document.getElementsByClassName('board')[0],
    player = document.getElementsByClassName('gamer')[0],
    element, innerElement,
    gamer = "", // it is a player, if true - X
    gameTable = [[null, null, null], [null, null, null], [null, null, null]],
    nullCount = 9,
    winner = null;

player.innerText = 'Сейчас ходит X';

for (var i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableClick;
	innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3)	.toString());
    element.appendChild(innerElement);
	board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;


function tableClick() {
    if (this.innerText == '') {
        this.innerText = gamer ? 'X' : 'O';
        var y = this.getAttribute('y'), x = this.getAttribute('x');
        gameTable[y][x] = gamer;
        nullCount--;
        if ((gameTable[y][0] === gamer && gameTable[y][1] === gamer && gameTable[y][2] === gamer) ||
            (gameTable[0][x] === gamer && gameTable[1][x] === gamer && gameTable[2][x] === gamer) ||
            (gameTable[0][0] === gamer && gameTable[1][1] === gamer && gameTable[2][2] === gamer) ||
            (gameTable[2][0] === gamer && gameTable[1][1] === gamer && gameTable[0][2] === gamer)) {
            winner = gamer; 
        }
		
		
		
        gamer = !gamer;
        player.innerText = gamer ? 'Сейчас ходит X' : 'Сейчас ходит O';
        if (nullCount == 0 || winner !== null) {
            if (winner !== null) {
                if (confirm('Победили ' + (winner ? 'X' : 'O') + '.\nЖелаете сыграть ещё?')) {
                    reset();
                }
            }
            else if (confirm('Игра закончилась в ничью.\nЖелаете сыграть ещё?')) {
                reset();
            }
        }
    }
    else {
        alert('Недопустимый ход');
    }
}

 
function reset() {
    gamer = true; 
    gameTable = [[null, null, null], [null, null, null], [null, null, null]]; 
    nullCount = 9; 
    winner = null;
    var table = document.getElementsByClassName('inner-cell');
    for (var i = 0; i < table.length; i++) {
        table[i].innerText = '';
    }
    player.innerText = 'Сейчас ходит X';
}