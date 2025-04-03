import { Image } from './clases.js';
// async function getImages() 

function extractExerciseName(url) {
    return url.split('/').pop().replace('.png', '');
}

document.addEventListener("DOMContentLoaded", () => {

    async function getImages() {

        const images = await fetch("https://wger.de/api/v2/exerciseimage/", {
            headers: {
                "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
                "Accept": "application/json"
            }
        });
    
        const result = await images.json();
        let image_array = result.results;
        console.log(image_array);
    
        let image_classes = image_array.map(ex => new Image(ex.id, ex.image));
        console.log(image_classes)
    
    
        const main = document.getElementById("main-images");
    
        image_classes.forEach((element) => {
            const image = document.createElement("div");
            image.classList.add("image-card");
            let name = extractExerciseName(element.image);
    
            image.innerHTML = `
            <h2>${name}<h2>
            <img src="${element.image}">`;
    
            main.appendChild(image);
        });
    
    }

    getImages();
});


// getImages();