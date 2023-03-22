document.addEventListener('DOMContentLoaded', () => {
    const rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];

    let currentColorIndex = 0;
    const rainbowBorderElement = document.querySelector('.rainbow-border');

    function changeBorderColor() {
        rainbowBorderElement.style.borderLeftColor = rainbowColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
    }

    setInterval(changeBorderColor, 800);
});


