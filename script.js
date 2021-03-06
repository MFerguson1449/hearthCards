const apiKey = process.env.API_KEY;
const endpoint = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/'
const form = document.querySelector('form.cardSearch');
const submitButton = document.querySelector('.searchSubmit');
const cardDisplay = document.querySelector('.cardDisplay');

function handleError(err) { // Error handling
    console.log('Something went wrong!!');
    console.log(err);
}

async function fetchCards(query) {
    const response = await fetch(`${endpoint}${query}?collectible=1`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
        }
    });
    const data = await response.json()
    .catch(handleError);
    return data;
}

async function handleSubmit(event) {
    event.preventDefault();
    const formInput = document.querySelector('.searchInput').value;
    console.log(`Looking for cards including ${formInput}...`);
    fetchAndDisplay(formInput);
}

async function fetchAndDisplay(query) {
    form.submit.disabled = true;
    const cards = await fetchCards(query);
    form.submit.disabled = false;
    displayCardInfo(cards);
    console.log(cards)
}

function displayCardInfo(cards) {
    const cardImageURLPrefix = 'https://art.hearthstonejson.com/v1/render/latest/enUS/512x/';
    const html = cards.map(
        cards => `<div class="card">
            <img src="${cardImageURLPrefix}${cards.cardId}.png" alt="${cards.name}" class="cardImg">
        </div>`
        );
        cardDisplay.innerHTML = html.join('');
}
  

form.addEventListener('submit', handleSubmit);