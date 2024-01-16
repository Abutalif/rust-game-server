document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

    // Initialize canvas size
    setCanvasSize();

    // Display the welcome screen
    displayWelcomeScreen();

    // Handle window resize event
    window.addEventListener('resize', function () {
        setCanvasSize();
        displayWelcomeScreen();
    });

    function setCanvasSize() {
        // Set canvas size to match window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function displayWelcomeScreen() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the welcome screen components
        drawBackground();
        drawTitle();
        drawJoinButton();
    }

    function drawBackground() {
        // Background is handled by CSS with a repeating texture
    }

    function drawTitle() {
        context.fillStyle = 'white';
        context.font = '2em Arial';
        context.fillText('Welcome to the Game!', canvas.width / 2, 150);
    }

    function drawJoinButton() {
        const buttonX = canvas.width / 2 - 100;
        const buttonY = 200;

        context.fillStyle = 'transparent';
        context.fillRect(buttonX, buttonY, 200, 50);

        context.fillStyle = 'white';
        context.font = '1.2em Arial';
        context.fillText('Join', canvas.width / 2, buttonY + 35);
    }
});
