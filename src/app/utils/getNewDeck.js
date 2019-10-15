import Axios from 'axios';

async function getNewDeck() {
  const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';
  let response = await Axios.get(API_URL);
  return response.data;
}

export default getNewDeck;
