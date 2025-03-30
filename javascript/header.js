document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `

    <nav>
        <ul class="nav-links">
            <li><a href="../html/index.html">Home</a></li>
            <li><a href="../html/exercises.html">Exercises</a></li>
            <li><a href="../html/workout.html">Workout</a></li>
        </ul>
    </nav>
`;

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener("click", function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    });
});

{/* <button class="menu-toggle" aria-label="Toggle navigation menu">
<div class="bar"></div>
<div class="bar"></div>
<div class="bar"></div>
</button> */}