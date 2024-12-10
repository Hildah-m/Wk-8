document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `8631001781e8d5b7ac0f931dceef6a6a=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please try again.");
                return;
            }

            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Description:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
