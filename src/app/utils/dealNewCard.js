import Axios from 'axios';

async function dealNewCard({ deck_id }) {
  const API_URL = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`;
  let response = await Axios.get(API_URL);
  return response.data;
}

export default dealNewCard;
