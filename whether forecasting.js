async function fetchWeatherData() {
    const apiKey = '0056ff7ef6177c83ae81fa86510d54c2';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        displayWeatherData(data);
      } else {
        throw new Error('Failed to fetch weather data.');
      }
    } catch (error) {
      console.error(error);
      displayErrorMessage();
    }
  }
  function displayWeatherData(data) {
    const weatherContainer = document.querySelector('.weather-data');
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const weatherHTML = `
      <h2>Weather in ${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Condition: ${weatherDescription}</p>
    `;
    weatherContainer.innerHTML = weatherHTML;
  }
  function displayErrorMessage() {
    const weatherContainer = document.querySelector('.weather-data');
    weatherContainer.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
  }
  window.addEventListener('load', fetchWeatherData);