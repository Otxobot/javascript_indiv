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


    const template = await fetch("https://wger.de/api/v2/exerciseimage/", {
        method: "GET",
        headers: {
            "Authorization": "Token d93103f284c50fe1adb30ed74034edb80513c171",
            "Accept": "application/json"
        }
    });

    template_result = await template.json()

    console.log(template_result);
}

main();