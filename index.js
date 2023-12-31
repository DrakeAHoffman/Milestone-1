window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', '', '', '', '',];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';



   

   const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [9,10,11]
   ];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
     else {
         announce(TIE);
        
       // announcer.innerHTML = 'Tie';
    }
       // announce(TIE);
       // announcer.innerHTML = 'Tie';
}

   const announce = (type) => {
    console.log('before', announcer)
        //isGameActive = false;
    //announcer.classList.remove('hide');
    console.log("after",announcer)
    switch(type){
        case PLAYERO_WON:
            announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;
        case PLAYERX_WON:
            announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
            break;
        case TIE:
            announcer.innerHTML = 'Tie';
    }
   // announcer.classList.remove('hide');
   };

   const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }
    return true;
   };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

   const changePlayer = () => {
    let playerLetter = document.getElementById("playerLetter")
     playerDisplay.classList.remove(`player${currentPlayer}`);
     //console.log("test",playerDisplay) 
    //currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer === 'X') {
       currentPlayer = 'O' 
       playerLetter.textContent="O"
    }
    else if (currentPlayer === 'O') {
        currentPlayer = 'X'
        playerLetter.textContent="X"
    }
    playerDisplay.classList.add(`player${currentPlayer}`); 
    //console.log("test2",playerDisplay)
   }



   const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
       }
   }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '', '', '', '',];
        isGameActive = true;
        announcer.innerHTML = '';

        if(currentPlayer === 'O') {
            changePlayer();
        }
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }



   tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
   });

    

    resetButton.addEventListener('click', resetBoard);
});

