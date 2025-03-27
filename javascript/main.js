async function main() {
    const routine = await fetch("https://wger.de/api/v2/routine/", {
        method: "GET",
        headers: {
            "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
            "Accept": "application/json"
        }
    });

    routine_result = await routine.json()

    // console.log(routine_result)


    const images = await fetch("https://wger.de/api/v2/exerciseimage/", {
        method: "GET",
        headers: {
            "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
            "Accept": "application/json"
        }
    });

    images_result = await images.json()
    to_image_classes(images_result);

    console.log(images_result);
}

main();