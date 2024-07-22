// countdown
const countdownDate = new Date("Aug 16, 2024 7:45:00").getTime()
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
    document.getElementById("countdownclock").innerHTML = "School's out!"
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


//color changers 
var colors = document.getElementById('colorpick')
colors.oninput = function () {
  document.body.style.backgroundColor = colors.value
  center.style.backgroundColor = colors.value
  center2.style.backgroundColor = colors.value
  center3.style.backgroundColor = colors.value
};

var reset = document.getElementById('reset-background')
reset.onclick = function () {
  document.body.style.backgroundColor = 'white'
  center.style.backgroundColor = 'white'
  center2.style.backgroundColor = 'white'
  center3.style.backgroundColor = 'white'
};

var colorstwo = document.getElementById('colorpick2')
colorstwo.oninput = function () {
  document.body.style.border= 'dotted' + colorstwo.value
  center.style.border = 'solid' + colorstwo.value
  center2.style.border = 'solid' + colorstwo.value
  center3.style.border = 'solid' + colorstwo.value
};

var resettwo = document.getElementById('reset-border')
resettwo.onclick = function () {
  document.body.style.border = 'dotted black'
  center.style.border = 'solid black'
  center2.style.border = 'solid black'
  center3.style.border = 'solid black'
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

const countdownDate2 = new Date("Aug 16, 2025 7:45:00").getTime()
const x2 = setInterval(function () {
  const now2 = new Date().getTime();
  const distance2 = countdownDate2 - now2;
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  document.getElementById("countdownclock2").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";
  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("countdownclock2").innerHTML = "School's out!"
  }
}, 1000);