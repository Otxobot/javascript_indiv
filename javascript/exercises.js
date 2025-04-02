import { Exercise } from './clases.js';

async function fetchExercises(type = "", muscle = "", difficulty = "") {
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

// async function displayExercises(exercises) {
//     console.log("entrando aqui")
//     const container = document.getElementById("exercise-results");
//     container.innerHTML = ""; // Clear previous results

//     if (exercises.length == 0)
//     {
//         console.log("exercises empty")
//         const error = document.createElement('p');
//         error.textContent = "Nothing in the API for you";
//         container.appendChild(error);
//     }

//     exercises.forEach(ex => {
//         const card = document.createElement("div");
//         card.classList.add("exercise-card");
//         card.innerHTML = `
//             <h3>${ex.name}</h3>
//             <p><strong>Muscle:</strong> ${ex.muscle}</p>
//             <p><strong>Type:</strong> ${ex.type}</p>
//             <p><strong>Equipment:</strong> ${ex.equipment}</p>
//             <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
//             <p><strong>Instructions:</strong> ${ex.instructions}</p>
//         `;
//         container.appendChild(card);
//     });
// }

async function displayExercises(exercises) {
    console.log("entrando aqui")
    const container = document.getElementById("exercise-results");
    container.innerHTML = "";

    if (exercises.length == 0) {
        console.log("exercises empty")
        const error = document.createElement('p');
        error.textContent = "Nothing in the API for you";
        container.appendChild(error);
    }

    exercises.forEach((ex, index) => {
        const card = document.createElement("div");
        card.classList.add("exercise-card");

        let shortInstructions = "";
        if (ex.instructions.length > 100)
        {
            shortInstructions = ex.instructions.substring(0,100) + "...";
        } else {
            shortInstructions = ex.instructions;
        }

        card.innerHTML = `
            <h3>${ex.name}</h3>
            <p><strong>Muscle:</strong> ${ex.muscle}</p>
            <p><strong>Type:</strong> ${ex.type}</p>
            <p><strong>Equipment:</strong> ${ex.equipment}</p>
            <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
            <p><strong>Instructions:</strong> 
                <span id="short-${index}">${shortInstructions}</span>
                <span id="full-${index}" style="display:none">${ex.instructions}</span>
            </p>
            <button class="read-more-btn" data-index="${index}">Read More</button>
        `;

        container.appendChild(card);
    });

    document.querySelectorAll(".read-more-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            const shortText = document.getElementById(`short-${index}`);
            const fullText = document.getElementById(`full-${index}`);

            if (fullText.style.display === "none") {
                fullText.style.display = "inline";
                shortText.style.display = "none";
                event.target.textContent = "Read Less";
            } else {
                fullText.style.display = "none";
                shortText.style.display = "inline";
                event.target.textContent = "Read More";
            }
        });
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
