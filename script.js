// Create an array to store names
const namesArray = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (namesArray.length < 10) {
        namesArray.push(name);
        displayNames();
        nameInput.value = '';

        if (namesArray.length === 10) {
            document.getElementById('addNameBtn').disabled = true;
            document.getElementById('addNameBtn').textContent = 'Max Reached'; // Change button text
        }
    }
}

function displayNames() {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';

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

    const randomNumber = Math.floor(Math.random() * namesArray.length);
    const randomName = namesArray[randomNumber];

    randomNameDiv.textContent = randomName;

    namesArray.splice(randomNumber, 1);

    displayNames();
}

// Event Listener for the button click to add name
document.getElementById('addNameBtn').addEventListener('click', addName);

// Event Listener for the button click to select and display a random name
document.getElementById('pickRandomBtn').addEventListener('click', pickRandomName);
