//your JS code here. If required.
const colorBoard = document.getElementById('color-board');

    // Create 800 boxes
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');

        // Add hover effect
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#3498db'; // Change to your desired hover color

            // After 1 second, change background to transparent
            setTimeout(() => {
                box.style.backgroundColor = 'transparent';
            }, 1000);
        });

        colorBoard.appendChild(box);
    }