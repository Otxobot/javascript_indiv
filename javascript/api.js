// import { Image, Exercise, WorkoutEntry } from './clases.js';

// //This file is where all of the api calls will be made and the responses will be set in their respective classes.

// async function applyFilters() {
//     const muscle = document.getElementById("muscle").value;
//     const type = document.getElementById("type").value;
//     const difficulty = document.getElementById("difficulty").value;

//     const exercises = await fetchExercises(muscle, type, difficulty);
//     displayExercises(exercises);
// }

// async function fetchExercises(type = "", muscle = "", difficulty = "") {
//     /*
    
//     First function will be for exercises, 
//     this API can give different response depending on the type, muscle or difficulty of each exercise
    
//     Because of this I will design this function to receive input from a button in the html
//     where the user will be able to filter exercises by type, muscle and difficulty.

//     */

//     const API_URL = new URL("https://api.api-ninjas.com/v1/exercises");

//     if (type){
//         API_URL.searchParams.append("type", type);
//     }
//     if (muscle){
//         API_URL.searchParams.append("muscle", muscle);
//     }
//     if (difficulty) {
//         API_URL.searchParams.append("difficulty", difficulty);
//     }
//     console.log("aqui vemos el url-> ", API_URL); 

//     const response = await fetch(API_URL, {
//         headers: {
//             "X-Api-Key": "WnzOrCpuawSpe4EKPUYLIA==HmJyHb3mtzZ2jhsO",
//             "Accept": "application/json"
//         }
//     });
//     const data = await response.json();
//     // console.log(data)
    
//     return data.map(ex => new Exercise(
//         ex.name, ex.type, ex.muscle,
//         ex.equipment, ex.difficulty,
//         ex.instructions
//     ));
// }


// function displayExercises(exercises) {
//     const container = document.getElementById("exercise-results");
//     container.innerHTML = ""; // Clear previous results

//     exercises.forEach(ex => {
//         const card = document.createElement("div");
//         card.classList.add("exercise-card");
//         card.innerHTML = `
//             <h3>${ex.name}</h3>
//             <p><strong>Muscle:</strong> ${ex.muscle}</p>
//             <p><strong>Type:</strong> ${ex.type}</p>
//             <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
//         `;
//         container.appendChild(card);
//     });
// }

// async function fetchImages() {
//     const response = await fetch("https://wger.de/api/v2/exerciseimage/", {
//         method: "GET",
//         headers: {
//             "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
//             "Accept": "application/json"
//         }
//     });
//     const data = await response.json();

//     return data.results.map(img => new Image(
//         img.id, img.image
//     ));
// }

// async function main() {
//     const exercises = await fetchExercises("strength", "lats");

//     console.log(exercises);

//     const images = await fetchImages();

//     // console.log(images)
// }

// main();