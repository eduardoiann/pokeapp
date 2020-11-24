import sortFunction from './sortFunc'
/* Fetch all 100 pokemon cards */
const fetchAllPokemonCards = async () => {
  try {
    const result = await fetch('https://api.pokemontcg.io/v1/cards');
    const json = await result.json();
    return sortFunction(json)
  } catch (error) {
    return error.message;
  }
};

export default fetchAllPokemonCards;