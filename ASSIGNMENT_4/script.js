let tempUnit = "F";

// Generate fake weather data
function generateWeather(city) {
    return {
        city: city,
        temp: Math.floor(Math.random() * 30 + 50),
        condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
    };
}

// Update UI
function updateUI(data) {
    document.getElementById("cityName").innerText = data.city;
    document.getElementById("temperature").innerText = data.temp + "°" + tempUnit;
    document.getElementById("weatherCondition").innerText = data.condition;
}

// Search city
function searchCity() {
    let city = document.getElementById("cityInput").value;
    if(city === "") {
        alert("Enter city name");
        return;
    }

    let data = generateWeather(city);
    updateUI(data);
}

// Load default
window.onload = () => {
    let data = generateWeather("New York");
    updateUI(data);
};
