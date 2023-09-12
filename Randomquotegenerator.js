const quoteContainer = document.querySelector('.quote');
const newQuoteButton = document.getElementById('new-quote-btn');
async function fetchRandomQuote() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    if (response.ok) {
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      displayQuote(randomQuote);
    } else {
      throw new Error('Failed to fetch a random quote.');
    }
  } catch (error) {
    console.error(error);
    displayErrorMessage();
  }
}
function displayQuote(quote) {
  quoteContainer.innerHTML = `<p>${quote.text}</p><p>- ${quote.author || 'Unknown'}</p>`;
}
function displayErrorMessage() {
  quoteContainer.innerHTML = '<p>Failed to fetch a random quote. Please try again later.</p>';
}
newQuoteButton.addEventListener('click', fetchRandomQuote);
fetchRandomQuote();
