async function main() {
    const images = await fetch("https://wger.de/api/v2/exerciseimage/", {
        headers: {
            "X-Api-Key": "WnzOrCpuawSpe4EKPUYLIA==HmJyHb3mtzZ2jhsO",
            "Accept": "application/json"
        }
    });

    const result = await images.json()

    console.log(result);
}

main();