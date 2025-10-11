
// Game loop
function gameLoop() {
    // if(gameState === 'gameOver') return;

    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Update game logic
function update() {
    if (gameState !== 'playing') return;

    // // Update bird
    // updateBirdPostion();

    // Generate pipes
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        generatePipe();
    }

    // Update pipes
    updatePipesPositions();

    // Check collisions
    if (checkCollisions()) {
        gameOver();
    }
}
function onSpaceClick() {
    switch (gameState) {
        case 'start':
            gameState = 'playing';
            updateUI();
            gameLoop();
            break;
        case 'playing':
            break;

        default:
            break;
    }
}

// Game over
function gameOver() {
    gameState = 'gameOver';
    
    // Update best score
    if (score > bestScore) {
        bestScore = score;
    }
    
    updateUI();
}
