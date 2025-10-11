// Game canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// UI elements
const startScreen = document.getElementById('startScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const gameUI = document.getElementById('gameUI');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const bestScoreElement = document.getElementById('bestScore');
const restartBtn = document.getElementById('restartBtn');
// Game objects
const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 30,
    height: 30,
    color: '#FFD700',
    velocity: 0
};

let gameState = 'start'; // 'start', 'playing', 'gameOver'
let score = 0;

let pipes = [];

