import { Exercise } from './clases.js';

async function fetchExercises(type = "", muscle = "", difficulty = "") {
    /*
    
    First function will be for exercises, 
    this API can give different response depending on the type, muscle or difficulty of each exercise
    
    Because of this I will design this function to receive input from a button in the html
    where the user will be able to filter exercises by type, muscle and difficulty.

    */

    const API_URL = new URL("https://api.api-ninjas.com/v1/exercises");

    if (type){
        API_URL.searchParams.append("type", type);
    }
    if (muscle){
        API_URL.searchParams.append("muscle", muscle);
    }
    if (difficulty) {
        API_URL.searchParams.append("difficulty", difficulty);
    }
    console.log("aqui vemos el url-> ", API_URL); 

    const response = await fetch(API_URL, {
        headers: {
            "X-Api-Key": "WnzOrCpuawSpe4EKPUYLIA==HmJyHb3mtzZ2jhsO",
            "Accept": "application/json"
        }
    });
    const data = await response.json();
    
    return data.map(ex => new Exercise(
        ex.name, ex.type, ex.muscle,
        ex.equipment, ex.difficulty,
        ex.instructions
    ));
}

async function displayExercises(exercises) {
    console.log("entrando aqui")
    const container = document.getElementById("exercise-results");
    container.innerHTML = ""; // Clear previous results

    if (exercises.length == 0)
    {
        console.log("exercises empty")
        const error = document.createElement('p');
        error.textContent = "Nothing in the API for you";
        container.appendChild(error);
    }

    // const images = await fetch("https://wger.de/api/v2/exerciseimage/", {
    //     headers: {
    //         "Authorization": "Token WnzOrCpuawSpe4EKPUYLIA==HmJyHb3mtzZ2jhsO",
    //         "Accept": "application/json"
    //     }
    // });

    // const images_result = await images.json()

    exercises.forEach(ex => {
        const card = document.createElement("div");
        card.classList.add("exercise-card");
        card.innerHTML = `
            <h3>${ex.name}</h3>
            <p><strong>Muscle:</strong> ${ex.muscle}</p>
            <p><strong>Type:</strong> ${ex.type}</p>
            <p><strong>Equipment:</strong> ${ex.equipment}</p>
            <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
            <p><strong>Instructions:</strong> ${ex.instructions}</p>
        `;
        container.appendChild(card);
    });
}

async function applyFilters() {
    const muscle = document.getElementById("muscle").value;
    const type = document.getElementById("type").value;
    const difficulty = document.getElementById("difficulty").value;


    const exercises = await fetchExercises(type, muscle, difficulty);
    displayExercises(exercises);
}

window.applyFilters = applyFilters;
