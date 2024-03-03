// countdown
const countdownDate = new Date("Apr 13, 2024 16:13:00").getTime()
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdownclock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownclock").innerHTML = "A young man stands in his bedroom."
  }
}, 1000);

//like button
var likeButton = document.getElementById('likeButton')
var likeCount = document.getElementById('likeCount')
let count = 0;

likeButton.addEventListener('click', () => {
  count++;
  if (count === 1){
    likeCount.innerText = count + " like! congrats"
  } else {
  likeCount.innerText = count + " likes! congrats";
  }
})

var center = document.getElementById('center')
var center2 = document.getElementById('center2')
var center3 = document.getElementById('center3')
var centerEvil = document.getElementById('center-evil')
var center2Evil = document.getElementById('center2-evil')
var center3Evil = document.getElementById('center3-evil')


//color changers 
var colors = document.getElementById('colorpick')
colors.oninput = function () {
  document.body.style.backgroundColor = colors.value
  center.style.backgroundColor = colors.value
  center2.style.backgroundColor = colors.value
  center3.style.backgroundColor = colors.value
  centerEvil.style.backgroundColor = colors.value
  center2Evil.style.backgroundColor = colors.value
  center3Evil.style.backgroundColor = colors.value
};

var reset = document.getElementById('reset-background')
reset.onclick = function () {
  document.body.style.backgroundColor = 'white'
  center.style.backgroundColor = 'white'
  center2.style.backgroundColor = 'white'
  center3.style.backgroundColor = 'white'
  centerEvil.style.backgroundColor = 'red'
  center2Evil.style.backgroundColor = 'red'
  center3Evil.style.backgroundColor = 'red'
};

var colorstwo = document.getElementById('colorpick2')
colorstwo.oninput = function () {
  document.body.style.border= 'dotted' + colorstwo.value
  center.style.border = 'solid' + colorstwo.value
  center2.style.border = 'solid' + colorstwo.value
  center3.style.border = 'solid' + colorstwo.value
  centerEvil.style.border = 'solid' + colorstwo.value
  center2Evil.style.border = 'solid' + colorstwo.value
  center3Evil.style.border = 'solid' + colorstwo.value
};

var resettwo = document.getElementById('reset-border')
resettwo.onclick = function () {
  document.body.style.border = 'dotted black'
  center.style.border = 'solid black'
  center2.style.border = 'solid black'
  center3.style.border = 'solid black'
  centerEvil.style.border = 'solid black'
  center2Evil.style.border = 'solid black'
  center3Evil.style.border = 'solid black'
};

// fish code
var theFish = document.getElementById('callthefish')
var fishyFishy = document.getElementById('theBigFish')
var moveInterval;

theFish.onclick = function () {
  let fishPosition = -600
  document.body.style.backgroundColor = '#57B0F4'
  document.body.style.border = 'dotted orange'
  center.style.backgroundColor = '#57B0F4'
  center2.style.backgroundColor = '#57B0F4'
  center3.style.backgroundColor = '#57B0F4'
  center.style.border = 'solid orange'
  center2.style.border = 'solid orange'
  center3.style.border = 'solid orange'
  moveInterval = setInterval(function () {
    fishPosition++
    fishyFishy.style.left = fishPosition + 'px'
    fishyFishy.scrollIntoView();
  }, 8)
};

fishyFishy.onclick = function () {
  document.body.style.backgroundColor = 'white'
  document.body.style.border = 'dotted black'
  center.style.backgroundColor = 'white'
  center2.style.backgroundColor = 'white'
  center3.style.backgroundColor = 'white'
  center.style.border = 'solid black'
  center2.style.border = 'solid black'
  center3.style.border = 'solid black'
  clearInterval(moveInterval)
  fishyFishy.style.left = '-600px'
};

//variables 4 site changers
var evilIncarnate = document.getElementById('evil-button')
var niceIncarnate = document.getElementById('nice-button')
var evil = document.getElementById('evil')
var nice = document.getElementById('nice')

nice.style.display = 'block';
evil.style.display = 'none';

evilIncarnate.onclick = superCool;
niceIncarnate.onclick = superCool;

function scrollToTop () {
  window.scrollTo(0, 0);
}

function superCool () {
  if (nice.style.display === 'none'){
    // normal 
    evil.style.display = 'none'
    nice.style.display = 'block'

    document.body.style.backgroundColor = 'white'
    document.body.style.border = 'dotted black'
    document.body.style.webkitTextStroke = '.05px black'
  
    center.style.backgroundColor = 'white'
    center.style.border = 'black solid'
    center2.style.backgroundColor = 'white'
    center2.style.border = 'black solid'
    center3.style.backgroundColor = 'white'
    center3.style.border = 'black solid'

  } else {
    // evil
    evil.style.display = 'block'
    nice.style.display = 'none'

    document.body.style.backgroundColor = '#FF0000'
    document.body.style.border = 'dotted black'
    document.body.style.webkitTextStroke = '.05px black'
  
    center.style.backgroundColor = 'red'
    center.style.border = 'black solid'
    center2.style.backgroundColor = 'red'
    center2.style.border = 'black solid'
    center3.style.backgroundColor = 'red'
    center3.style.border = 'black solid'
  }
}

//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

//food
var foodX;
var foodY;

var gameOver = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //draws on the board yasss artist

    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 800/10);
}

function update() {
    if (gameOver){
        return;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX,foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for (let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("you are a little tiny baby who crashed into the wall. GAME OVER");
    }

    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
            alert("you are a little tiny baby who ate itself. GAME OVER");
        }
    }
}

function changeDirection(e) {
    if (e.code == "KeyW" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "KeyS" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "KeyA" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "KeyD" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}

