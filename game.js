function onSpaceClick() {
    switch (gameState) {
        case 'start':
            gameState = 'playing';
            updateUI();
            break;
        case 'playing':

            break;

        default:
            break;
    }
}
