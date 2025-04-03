import { Video } from './clases.js';
// async function getImages() 

// function extractExerciseName(url) {
//     return url.split('/').pop().replace('.png', '');
// }

document.addEventListener("DOMContentLoaded", () => {

    async function getVideos() {

        const images = await fetch("https://wger.de/api/v2/video/?limit=20&offset=20", {
            headers: {
                "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
                "Accept": "application/json"
            }
        });
    
        const result = await images.json();
        let video_array = result.results;
        console.log(video_array);
    
        let video_classes = video_array.map(ex => new Video(ex.id, ex.video));
        console.log(video_classes)
    
    
        const main = document.getElementById("main-videos");
    
        video_classes.forEach((element) => {
            const video = document.createElement("div");
            video.classList.add("video-card");
    
            video.innerHTML = `
            <video width="100%" height="auto" controls>
                <source src="${element.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
                <p>Video ID: ${element.id}</p>`;    
    
            main.appendChild(video);
        });
    
    }

    getVideos();
});

