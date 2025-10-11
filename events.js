

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        onSpaceClick();
    }
});

// Prevent context menu on right click
canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
