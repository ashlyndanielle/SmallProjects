const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

/*
  ctx.fillStyle = 'blue'; // determines fill color of element
  ctx.fillRect(x, y, WIDTH, HEIGHT) 
    // creates a rectagle X-px from the left and Y-px from the top
    // with specified WIDTH and HEIGHT
  ctx.strokeStyle = 'red' // determines border color
  ctx.strokeRect(x, y, WIDTH, HEIGHT) // same as fillRect
*/

/*
  canvas is 200x400
  10 columns of 20px width
  20 rows of 20px width
  1 square = 20x20

  instead of using px we will use square = 20
*/
const square = 20;

// CREATE BOARD
const column = 10;
const row = 20;
const vacant = 'white';

let board = [];

for (r = 0; r < row; r++) {
  board[r] = [];
  for (c = 0; c < column; c++) {
    
  }
}


// where x and y are number of squares from the left and top
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x*square, y*square, square, square);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x*square, y*square, square, square);
}

drawSquare(2, 5, 'green');