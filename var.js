// Game variables
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game objects
const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 30,
    height: 30,
    color: '#FFD700'
};

let gameState = 'start'; // 'start', 'playing', 'gameOver'

