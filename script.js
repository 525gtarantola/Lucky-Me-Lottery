// Create an array to store names
const namesArray = []


function addName() {
    const nameInput = document.getElementById('nameInput') // Storing name input element as a var
    const name = nameInput.value.trim() // Get the trimmed value of the input box and store in a var

    namesArray.push(name) // Push adds or appends items to the array, add name to the end of the array
    displayNames() // Call displayNames function to update the list

    nameInput.value = '' // Clear the input field after adding the name


}

function displayNames() {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '' // Clear out previous list items

    for (let i = 0; i < namesArray.length; i++){
        const name = namesArray[i]

        const li = document.createElement('li')
        li.className = 'list-group-item'

        const span = document.createElement('span')
        span.textContent = name

        li.appendChild(span)
        nameList.appendChild(li)
    }
}

function pickRandomName() {
    const randomNameDiv = document.getElementById('randomName')
    randomNameDiv.textContent = ''

    //generate and select random name from namesArray
    const randomNumber = Math.floor(Math.random() * namesArray.length)
    const randomName = namesArray[randomNumber]

    randomNameDiv.textContent = randomName

    namesArray.splice(randomNumber, 1)

    displayNames(); 



    
}

// Event Listener for the button click to add name
document.getElementById('addNameBtn').addEventListener('click' , addName)
// Event Listener for the button click to select and dsplay a random name
document.getElementById('pickRandomBtn').addEventListener('click' , pickRandomName)

