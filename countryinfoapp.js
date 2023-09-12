const countryInfoContainer = document.querySelector('.country-info');
async function fetchCountryData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/name/India');
    if (response.ok) {
      const data = await response.json();
      const country = data[0]; 
      const countryHTML = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <p>Language(s): ${Object.values(country.languages).join(', ')}</p>
        <p>Currency: ${Object.keys(country.currencies).join(', ')}</p>
        <img src="${country.flags.png}" alt="${country.name.common} Flag" width="200">
      `;
      countryInfoContainer.innerHTML = countryHTML;
    } else {
      throw new Error('Failed to fetch country data.');
    }
  } catch (error) {
    console.error(error);
    displayErrorMessage();
  }
}
function displayErrorMessage() {
  countryInfoContainer.innerHTML = '<p>Failed to fetch country data. Please try again later.</p>';
}
window.addEventListener('load', fetchCountryData);
