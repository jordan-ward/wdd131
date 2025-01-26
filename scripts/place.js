
let temperature = 37;
let windSpeed = 10;

// Wind chill is not calculated for temperatures above 50°F or wind speeds below 3 mph
function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
      return Math.round(
        35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
      );
    } else {
      return tempF;
    }
}

let windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").innerHTML = windChill;

// Footer
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;

