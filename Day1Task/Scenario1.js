// Initial temperature setting
let currentTemperature = 25; // Initial temperature in degrees Celsius


function updateTemperature(newTemparature) {
    currentTemperature = newTemparature
    console.log(`updateTemperature is ${currentTemperature}`);

}

updateTemperature(28);
updateTemperature(35);
updateTemperature(45);