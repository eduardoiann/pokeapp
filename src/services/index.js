/* Function to order the array of cards by name ASC */
const sortFunction = (array) => {
  const orderedArray = array.cards.sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
return orderedArray
}

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

/* Fetch all cards by any given name */
const fetchPokemonCardByName = async (name) => {
  const result = await fetch(`https://api.pokemontcg.io/v1/cards?name=${name}`);
  try {
    const json = await result.json();
    return sortFunction(json)
  } catch (error) {
    return error.message;
  }
};

/* Fetch any pokemon card by any given ID */
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
