const c = document.getElementById('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext('2d');

// const square = {
//   x: 20,
//   y: 20
// }

// Draws squares 
// while (square.y < window.innerHeight - 40) {
//   if (square.x < window.innerWidth - 40) {
//     ctx.fillRect(square.x, square.y, 20, 20);
//     ctx.fillStyle = "#000";
    
//     square.x += 40;
//   } else {
//     square.x = 20;
//     square.y += 40;
//   }
// }



// Draw one moving square
// const game = setInterval(play, 500);

// function play() {
//   if (square.y < window.innerHeight - 40) {
//     if (square.x < window.innerWidth - 40) {
//       ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//       ctx.fillRect(square.x, square.y, 20, 20);
//       ctx.fillStyle = "#000";

//       square.x += 40;
//     } else {
//       square.x = 20;
//       square.y += 40;
//     }
//   }
//   else {
//     stop();
//   }
// };

// function stop(){
//   console.log('stopped game');
//   clearInterval(game);
// }



const square = {
  x: window.innerWidth / 2 - 20,
  y: window.innerHeight / 2 - 20,
}

function draw() {
  ctx.clearRect(0,0,canvas.width, canvas.height);

  let x = Math.max(Math.min(square.x, canvas.width - 20), 0);
  let y = Math.max(Math.min(square.y, canvas.height - 20), 0);

  ctx.fillRect(x, y, 20, 20);
  ctx.fillStyle = "#000";
}

draw();

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 37) {
    // console.log('going left');
    if (square.x > 0) {
      square.x -= 20;
      draw();
    }
  }
  if(e.keyCode === 38) {
    // console.log('going up');
    if (square.y > 0) {
      square.y -= 20;
      draw();
    }
  }
  if (e.keyCode === 39) {
    // console.log('going right');
    if (square.x < canvas.width - 20) {
      square.x += 20;
      draw();
    }
  }
  if (e.keyCode === 40) {
    // console.log('going down');
    if (square.y < canvas.height - 20) {
      square.y += 20;
      draw();
    }
  }
});