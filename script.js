// Create an array to store names
const namesArray = [];

function addName() {
    const nameInput = document.getElementById('nameInput'); // Storing name input element as a var
    const name = nameInput.value.trim(); // Get the trimmed value of the input box and store in a var

    namesArray.push(name); // Push adds or appends items to the array, add name to the end of the array
    displayNames(); // Call displayNames function to update the list

    nameInput.value = ''; // Clear the input field after adding the name
}

function displayNames() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = ''; // Clear out previous list items

    for (let i = 0; i < namesArray.length; i++) {
        const name = namesArray[i];

        const li = document.createElement('li');
        li.className = 'list-group-item';

        const span = document.createElement('span');
        span.textContent = name;

        li.appendChild(span);
        nameList.appendChild(li);
    }
}

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName');
    randomNameDiv.textContent = '';

    // Generate and select random name from namesArray
    const randomNumber = Math.floor(Math.random() * namesArray.length);
    const randomName = namesArray[randomNumber];

    randomNameDiv.textContent = randomName;

    namesArray.splice(randomNumber, 1);

    displayNames();

    // Add confetti animation
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function confettiAnimation() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return;
        }

        const particleCount = 50 * (timeLeft / duration);
        // Since particles fall down, start a bit higher than random
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });

        requestAnimationFrame(confettiAnimation);
    }

    confettiAnimation();
}

// Event Listener for the button click to add name
document.getElementById('addNameBtn').addEventListener('click', addName);
// Event Listener for the button click to select and display a random name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName);
