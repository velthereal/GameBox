let start = document.querySelector('#start');
let game = document.querySelector('#game');
let time = document.querySelector('#time');
let game_time = document.querySelector('#game-time');

let time_header = document.querySelector('#time-header');
let result_header = document.querySelector('#result-header');
let result = document.querySelector('#result');

let score = 0;

start.addEventListener('click', startGame);
game.addEventListener('click', handlerClick);
game_time.addEventListener('input', setGameTime);

function startGame() {
   score = 0;
   setGameTime();
   start.style.display = 'none';
   game.style.background = 'white';
   renderBox();
}

function handlerClick(e){
   if(e.target.dataset.box){
      score++;
      console.log(score);
      renderBox();
   }
}

function renderBox() {
   game.innerHTML = '';
   let maxTop, maxLeft;
   let size = rand(20,60);
   let div = document.createElement('div');
   div.style.width = div.style.height = `${size}px`;
   maxTop = game.getBoundingClientRect().height - size;
   maxLeft = game.getBoundingClientRect().width - size;
   div.style.background = randomColor();
   div.style.position = 'absolute';
   div.style.top = `${rand(0,maxTop)}px`;
   div.style.left = `${rand(0,maxLeft)}px`;
   div.setAttribute('data-box', true);
   div.style.cursor = 'pointer';
   game.insertAdjacentElement('afterbegin', div);
}

function rand(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}

function setGameTime() {
   let $time = parseFloat(game_time.value);
   time.textContent = $time.toFixed(1);
}

function randomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
 