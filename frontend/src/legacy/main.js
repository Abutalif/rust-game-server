document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('gameCanvas');
    const context = canvas.getContext('2d');

    animate(0);

    // Load assets asynchronously
    loadAssets().then(() => {
        // Set canvas size to match window dimensions
        setCanvasSize();

        // Display the welcome screen after assets are loaded
        displayWelcomeScreen();
    });

    // Handle window resize event
    window.addEventListener('resize', function () {
        setCanvasSize();
        displayWelcomeScreen();
    });

    // Handle mouse events
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('click', handleClick); // New event listener for the close button

    // Flag to track if the button is currently pressed
    let isButtonPressed = false;

    // Flag to track if the connecting box is currently visible
    let isConnectingBoxVisible = false;

    // Flag to track if the close button is currently pressed
    let isCloseButtonPressed = false;

    function setCanvasSize() {
        // Set canvas size to match window dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function loadAssets() {
        // Load images asynchronously
        return Promise.all([
            loadImage('assets/textures/background.png'),
            loadImage('assets/textures/title.png'),
            loadImage('assets/textures/button.png'),
            loadImage('assets/textures/button_hover.png'),
            loadImage('assets/textures/connecting_box.png'),
            loadImage('assets/textures/cross.png') // New image for the close button
        ]).then(([backgroundImage, titleImage, buttonImage, buttonHoverImage, connectingBoxImage, closeButtonImage]) => {
            // Store the loaded images for later use
            assets.backgroundImage = backgroundImage;
            assets.titleImage = titleImage;
            assets.buttonImage = buttonImage;
            assets.buttonHoverImage = buttonHoverImage;
            assets.connectingBoxImage = connectingBoxImage;
            assets.closeButtonImage = closeButtonImage; // Store the close button image
        });
    }

    function loadImage(src) {
        // Load image asynchronously and return a promise
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    function displayWelcomeScreen() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the welcome screen components
        drawBackground();
        drawTitle();
        drawJoinButton();
        drawConnectingBox(); // Draw the connecting box
        drawCloseButton(); // Draw the close button
    }

    function drawBackground() {
        // Draw tiled background using the loaded image
        if (assets.backgroundImage) {
            const pattern = context.createPattern(assets.backgroundImage, 'repeat');
            context.fillStyle = pattern;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function drawTitle() {
        // Draw title using the loaded image
        if (assets.titleImage) {
            context.drawImage(assets.titleImage, 0, 0, canvas.width, canvas.height * 0.5);
        }
    }

    function drawJoinButton() {
        // Draw button based on the button state
        if (isButtonPressed) {
            drawButton(assets.buttonHoverImage);
            // Show connecting box when the button is pressed
            isConnectingBoxVisible = true;
        } else {
            drawButton(assets.buttonImage);
        }
    }

    function drawButton(image) {
        // Draw button using the loaded image
        if (image) {
            context.drawImage(image, 0, canvas.height * 0.5, canvas.width, canvas.height * 0.3);
        }
    }

    function drawConnectingBox() {
        // Draw connecting box if it is visible
        if (isConnectingBoxVisible && assets.connectingBoxImage) {
            context.drawImage(assets.connectingBoxImage, 0, 0, canvas.width, canvas.height);
        }
    }

    function drawCloseButton() {
        // Draw close button at the top right of the connecting box
        if (isConnectingBoxVisible && assets.closeButtonImage) {
            context.drawImage(assets.closeButtonImage, canvas.width - 50, 10, 40, 40);
        }
    }

    function handleMouseDown() {
        // Change button appearance when pressed
        isButtonPressed = true;
        displayWelcomeScreen();
    }

    function handleMouseUp() {
        // Change button appearance back to normal on mouse release
        isButtonPressed = false;
        // Hide connecting box when the button is released
        // isConnectingBoxVisible = false;
        displayWelcomeScreen();
    }

    function handleClick(event) {
        // Check if the click is on the close button
        const closeButtonX = canvas.width - 50;
        const closeButtonY = 10;
        const closeButtonWidth = 40;
        const closeButtonHeight = 40;

        if (
            event.clientX >= closeButtonX &&
            event.clientX <= closeButtonX + closeButtonWidth &&
            event.clientY >= closeButtonY &&
            event.clientY <= closeButtonY + closeButtonHeight
        ) {
            // Set the flag to track the close button press
            isCloseButtonPressed = true;
            // Hide the connecting box when the close button is pressed
            isConnectingBoxVisible = false;
            // Redraw the screen
            displayWelcomeScreen();
        }
    }

    // Store loaded assets for later use
    const assets = {
        backgroundImage: null,
        titleImage: null,
        buttonImage: null,
        buttonHoverImage: null,
        connectingBoxImage: null,
        closeButtonImage: null
    };
});