# FitPro - Your Personal Fitness Companion

![FitPro Logo](assets/untitled.mp4)

FitPro is a comprehensive fitness web application that helps users discover exercises, track workouts, and visualize exercises with images. It integrates with external fitness APIs to provide a rich exercise database.

## Features

- **Exercise Library**: Browse exercises by type, muscle group, and difficulty
- **Workout Log**: Track your workouts with sets, reps, and weights
- **Exercise Images**: Visual reference for proper exercise form
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- [API-Ninjas Exercises API](https://api-ninjas.com/api/exercises)
- [wger Exercise Images API](https://wger.de/en/software/api)
- Local Storage for workout persistence
- Font Awesome for icons

## Project Structure
```
.
├── assets/ # Media assets
│ └── untitled.mp4 # Background video
├── css/ # Stylesheets
│ ├── style1.css # (Consider removing if unused)
│ └── style.css # Main stylesheet
├── html/ # HTML pages
│ ├── exercises.html # Exercise library
│ ├── images.html # Exercise images
│ ├── index.html # Home page
│ └── workout.html # Workout tracker
├── javascript/ # JavaScript modules
│ ├── clases.js # Class definitions
│ ├── exercises.js # Exercise library logic
│ ├── images.js # Exercise images logic
│ └── workout.js # Workout tracker logic
├── package.json # Node.js dependencies
└── README.md # Project documentation
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Otxobot/javascript_indiv.git
   cd javascript_indiv

## API Keys
- The project uses two APIs that require keys:

- API-Ninjas Exercises API:

-Get your own key at api-ninjas.com

-wger Exercise Images API:

-Register at wger.de for your own token
