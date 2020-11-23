const sortFunction = async (array) => {
  const orderedArray = await array.cards.sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
return orderedArray
}

const fetchAllPokemonCards = async () => {
  try {
    const result = await fetch('https://api.pokemontcg.io/v1/cards');
    const json = await result.json();
    return sortFunction(json)
  } catch (error) {
    return error.message;
  }
};

const fetchPokemonCardByName = async (name) => {
  const result = await fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`);
  try {
    const json = await result.json();
    return sortFunction(json)
  } catch (error) {
    return error.message;
  }
};

const fetchPokemonCardByID = async (id) => {
  try {
    const result = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const json = await result.json();
    return json;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  fetchAllPokemonCards,
  fetchPokemonCardByName,
  fetchPokemonCardByID,
};
