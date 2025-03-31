export { Image, Exercise, WorkoutEntry}

class Image {
    constructor(id, image)
    {
        this.id = id;
        this.image = image;
    }
}

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
    constructor(exercise, sets, reps, weight) {
        this.exercise = exercise;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.date = new Date().toLocaleDateString();
    }
}
