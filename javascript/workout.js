
import { WorkoutEntry } from './clases.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("workout-form");
    const workoutList = document.getElementById("workout-list");
    const totalCount = document.getElementById("total-count");
    const lastExercise = document.getElementById("last-exercise");
    const clearAllBtn = document.createElement("button");

    let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

    clearAllBtn.textContent = "Clear All Workouts";
    clearAllBtn.addEventListener("click", clearAllWorkouts);
    document.getElementById("workout-stats").appendChild(clearAllBtn);

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
                    <button class="edit-btn" data-index="${index}">✏️</button>
                    <button class="delete-btn" data-index="${index}">❌</button>
                </td>
            `;
            workoutList.appendChild(row);
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", (e) => deleteWorkout(e.target.dataset.index));
        });

        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", (e) => editWorkout(e.target.dataset.index));
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const exercise = document.getElementById("exercise").value;
        const sets = document.getElementById("sets").value;
        const reps = document.getElementById("reps").value;
        const weight = document.getElementById("weight").value;
        const date = new Date().toLocaleDateString();

        const workout = new WorkoutEntry(exercise, sets, reps, weight, date);
        workouts.push(workout);
        saveAndRender();
        form.reset();
    });

    function deleteWorkout(index) {
        workouts.splice(index, 1);
        saveAndRender();
    }

    function editWorkout(index) {
        const workout = workouts[index];
        document.getElementById("exercise").value = workout.exercise;
        document.getElementById("sets").value = workout.sets;
        document.getElementById("reps").value = workout.reps;
        document.getElementById("weight").value = workout.weight;
        workouts.splice(index, 1);
        saveAndRender();
    }

    function clearAllWorkouts() {
        workouts = [];
        saveAndRender();
    }

    function saveAndRender() {
        workouts.sort((a, b) => new Date(b.date) - new Date(a.date));
        localStorage.setItem("workouts", JSON.stringify(workouts));
        updateStats();
        renderWorkouts();
    }

    function updateStats() {
        totalCount.textContent = workouts.length;
        lastExercise.textContent = workouts.length > 0 ? workouts[workouts.length - 1].exercise : "None";
    }

    renderWorkouts();
});
