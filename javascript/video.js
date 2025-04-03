import { Video } from './clases.js';

document.addEventListener("DOMContentLoaded", () => {

    async function getVideos() {

        const images = await fetch("https://wger.de/api/v2/video/?limit=1000", {
            headers: {
                "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
                "Accept": "application/json"
            }
        });
    
        const result = await images.json();
        let video_array = result.results;
    
        let video_classes = video_array.map(ex => new Video(ex.id, ex.video, ex.codec));
    
    
        const main = document.getElementById("main-videos");
    
        

        for (const element of video_classes) {
            const video = document.createElement("div");
            video.classList.add("video-card");
            

            if (element.codec !== "h264") {
                continue;
            }
            
            video.innerHTML = `
            <video width="100%" height="auto" controls>
                <source src="${element.video}" type="video/mp4" codecs="hvc1">
                Your browser does not support the video tag.
            </video>`;
            
            main.appendChild(video);
        }
    
    }

    getVideos();
});

