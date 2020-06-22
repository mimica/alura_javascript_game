const characterVelocity = 3;

let scenarioImg;
let characterImg;
let cenario;
let character;
let gameSound;

let isSoundPlaying = false;
let soundButton = document.getElementById('soundButton');
soundButton.addEventListener('click', function() {
	if (isSoundPlaying) {
		gameSound.stop();
		isSoundPlaying = false;
		soundButton.innerText = 'Click for sound';
	} else {
		gameSound.loop();
		isSoundPlaying = true;
		soundButton.innerText = 'Click for mute'
	}
});


function preload() {
	scenarioImg = loadImage('imgs/cenario/floresta.png');
	characterImg = loadImage('imgs/personagem/correndo.png');
	gameSound = loadSound('sounds/trilha_jogo.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	cenario = new Cenario(scenarioImg, characterVelocity);
	character = new Personagem(characterImg);
	frameRate(40);
}
  
function draw() {
	cenario.show();
	cenario.move();
	character.show();
}
