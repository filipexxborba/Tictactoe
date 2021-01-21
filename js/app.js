var currentPlayer = 0;
var blocksArray = document.querySelectorAll('p');
var winner = 0;
var checkRunning = 0;
var jogadas = 0;

function resetGame(){
    currentPlayer = 0;
    for(let i = 0; i<9 ; i++){
        blocksArray[i].innerText = "";
        blocksArray[i].classList.remove('winner-positions');
    }
    jogadas = 0;
    winner = 0;
    checkRunning = 0;
}

function gameAction(element){
    validateState(element);
}

function validateState(element){
    if(checkRunning == 0){
        // Horizontal O
        rules();
        validateBlock(element);
    }
}

function validateBlock(element){
    if(checkRunning == 1){
        console.log('O jogo já acabou');
    }else{
        if(element.innerText == ""){
            validatePlayer(element);
            jogadas++;
        }else{
            console.log('Bloco já selecionado');
        }
    }
}

function validatePlayer(element){
    if(currentPlayer % 2 == 0){
        element.innerText = 'X';
        currentPlayer++;
        rules();
    }else{
        element.innerText = 'O';
        currentPlayer++;
        rules();
    }
}

function rules(){
    // Horizontal o
    if(blocksArray[0].innerText == "O" && blocksArray[1].innerText == "O" && blocksArray[2].innerText == "O"){
    
        blocksArray[0].classList.add('winner-positions');
        blocksArray[1].classList.add('winner-positions');
        blocksArray[2].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    if(blocksArray[3].innerText == "O" && blocksArray[4].innerText == "O" && blocksArray[5].innerText == "O"){
    
        blocksArray[3].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[5].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    if(blocksArray[6].innerText == "O" && blocksArray[7].innerText == "O" && blocksArray[8].innerText == "O"){
    
        blocksArray[6].classList.add('winner-positions');
        blocksArray[7].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    // Vertical o
    if(blocksArray[0].innerText == "O" && blocksArray[3].innerText == "O" && blocksArray[6].innerText == "O"){
    
        blocksArray[0].classList.add('winner-positions');
        blocksArray[3].classList.add('winner-positions');
        blocksArray[6].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    if(blocksArray[1].innerText == "O" && blocksArray[4].innerText == "O" && blocksArray[7].innerText == "O"){
    
        blocksArray[1].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[7].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    if(blocksArray[2].innerText == "O" && blocksArray[5].innerText == "O" && blocksArray[8].innerText == "O"){
    
        blocksArray[2].classList.add('winner-positions');
        blocksArray[5].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    // Diagonais
    if(blocksArray[0].innerText == "O" && blocksArray[4].innerText == "O" && blocksArray[8].innerText == "O"){
    
        blocksArray[0].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    if(blocksArray[6].innerText == "O" && blocksArray[4].innerText == "O" && blocksArray[2].innerText == "O"){
    
        blocksArray[6].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[2].classList.add('winner-positions');
    
        checkRunning = 1;
        winner = 1;
        callWinner();
    }
    
    // Horizontal X
    if(blocksArray[0].innerText == "X" && blocksArray[1].innerText == "X" && blocksArray[2].innerText == "X"){
    
        blocksArray[0].classList.add('winner-positions');
        blocksArray[1].classList.add('winner-positions');
        blocksArray[2].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(blocksArray[3].innerText == "X" && blocksArray[4].innerText == "X" && blocksArray[5].innerText == "X"){
        blocksArray[3].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[5].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(blocksArray[6].innerText == "X" && blocksArray[7].innerText == "X" && blocksArray[8].innerText == "X"){
        blocksArray[6].classList.add('winner-positions');
        blocksArray[7].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    // Vertical X
    if(blocksArray[0].innerText == "X" && blocksArray[3].innerText == "X" && blocksArray[6].innerText == "X"){
        blocksArray[0].classList.add('winner-positions');
        blocksArray[3].classList.add('winner-positions');
        blocksArray[6].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(blocksArray[1].innerText == "X" && blocksArray[4].innerText == "X" && blocksArray[7].innerText == "X"){
        blocksArray[1].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[7].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(blocksArray[2].innerText == "X" && blocksArray[5].innerText == "X" && blocksArray[8].innerText == "X"){
        blocksArray[2].classList.add('winner-positions');
        blocksArray[5].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    // Diagonais
    if(blocksArray[0].innerText == "X" && blocksArray[4].innerText == "X" && blocksArray[8].innerText == "X"){
        blocksArray[0].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[8].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(blocksArray[6].innerText == "X" && blocksArray[4].innerText == "X" && blocksArray[2].innerText == "X"){
        blocksArray[6].classList.add('winner-positions');
        blocksArray[4].classList.add('winner-positions');
        blocksArray[2].classList.add('winner-positions');
        checkRunning = 1;
        winner = 2;
        callWinner();
    }
    if(jogadas == 9){
        winner = 3;
        jogadas = 0;
        callWinner();
    }
}

function callWinner(){
    if(winner == '1'){
        document.querySelector('#text-winner').innerText = "O vencedor é o player O!";
        document.querySelector('.wrapper').classList.add('blur');
        document.querySelector('.winner-box').classList.add('active');
        setTimeout(() => {
            document.querySelector('.winner-box').classList.remove('active');
            document.querySelector('.wrapper').classList.remove('blur');
            winner = 0;
        }, 3000);
    }
    if(winner == '2'){
        document.querySelector('#text-winner').innerText = "O vencedor é o player X!";
        document.querySelector('.wrapper').classList.add('blur');
        document.querySelector('.winner-box').classList.add('active');
        setTimeout(() => {
            document.querySelector('.winner-box').classList.remove('active');
            document.querySelector('.wrapper').classList.remove('blur');
            winner = 0;
        }, 3000);
    }
    if(winner == '3'){
        document.querySelector('#text-winner').innerText = "Empate!";
        document.querySelector('.wrapper').classList.add('blur');
        document.querySelector('.winner-box').classList.add('active');
        setTimeout(() => {
            document.querySelector('.winner-box').classList.remove('active');
            document.querySelector('.wrapper').classList.remove('blur');
            winner = 0;
        }, 3000);
    }
}



