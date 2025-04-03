import { WorkoutEntry } from './clases.js'

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workout-form");
    const workoutList = document.getElementById("workout-list");
    let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

    function renderWorkouts() {
        workoutList.innerHTML = "";
        workouts.forEach((workout, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${workout.exercise}</td>
                <td>${workout.sets}</td>
                <td>${workout.reps}</td>
                <td>${workout.weight} kg</td>
                <td>${workout.date}</td>
                <td>
                    <button onclick="deleteWorkout(${index})">❌</button>
                </td>
            `;
            workoutList.appendChild(row);
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const exercise = document.getElementById("exercise").value;
        const sets = document.getElementById("sets").value;
        const reps = document.getElementById("reps").value;
        const weight = document.getElementById("weight").value;

        const workout = new WorkoutEntry(exercise, sets, reps, weight);

        workouts.push(workout);
        localStorage.setItem("workouts", JSON.stringify(workouts));
        updateStats();
        renderWorkouts();
        form.reset();
    });

    window.deleteWorkout = (index) => {
        workouts.splice(index, 1);
        localStorage.setItem("workouts", JSON.stringify(workouts));
        updateStats();
        renderWorkouts();
    };

    function updateStats() {
        document.getElementById("total-count").textContent = workouts.length;
        document.getElementById("last-exercise").textContent = workouts.length > 0 ? workouts[workouts.length - 1].exercise : "None";
    }
    renderWorkouts();
});
