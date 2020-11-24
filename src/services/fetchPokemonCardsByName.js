import sortFunction from './sortFunc'

const fetchPokemonCardsByName = async (name) => {
  const result = await fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`);
  try {
    const json = await result.json();
    return sortFunction(json)
  } catch (error) {
    return error.message;
  }
};

export default fetchPokemonCardsByName;