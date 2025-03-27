export { Image, Exercise, WorkoutEntry}

class Image {
    constructor(id, image)
    {
        this.id = id;
        this.image = image;
    }
}

// {
//     name: 'Weighted pull-up',
//     type: 'strength',
//     muscle: 'lats',
//     equipment: 'other',
//     difficulty: 'intermediate',
//     instructions: "Attach a weight to a dip belt and secure it around your waist. Grab the pull-up bar with the palms of your hands facing forward. For a medium grip, your hands should be spaced at shoulder width. Both arms should be extended in front of you holding the bar at the chosen grip. You'll want to bring your torso back about 30 degrees while creating a curvature in your lower back and sticking your chest out. This will be your starting position. Now, exhale and pull your torso up until your head is above your hands. Concentrate on squeezing your shoulder blades back and down as you reach the top contracted position. After a brief moment at the top contracted position, inhale and slowly lower your torso back to the starting position with your arms extended and your lats fully stretched."
//   },

class Exercise {
    constructor(name, type, muscle, equipment, difficulty, instructions) {
        this.name = name;
        this.type = type;
        this.muscle = muscle;
        this.equipment = equipment;
        this.difficulty = difficulty;
        this.instructions = instructions;
    }
}

class WorkoutEntry {
    constructor(exerciseName, sets, reps, weight) {
        this.exerciseName = exerciseName;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.date = new Date().toLocaleDateString();
    }
}

