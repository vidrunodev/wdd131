
const temperature = -17; 
const windSpeed = 5; 

function calculateWindChill(temp, wind) {
    return Math.round(13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16)));
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.querySelector('.windchill');
    windChillElement.textContent = `${windChill} °C`; 
} else {
    const windChillElement = document.querySelector('.windchill');
    windChillElement.textContent = "N/A";
}
