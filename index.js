window.addEventListener('DOMContentLoaded', () => {
    const tiles = array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', '',];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';



   // Indexes within the board
   // [0] [1] [2]
  //  [3] [4] [5]
   // [6] [7] [8]

   const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
   ];

   tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
   });

    

    resetButton.addEventListener('click', resetBoard);
});