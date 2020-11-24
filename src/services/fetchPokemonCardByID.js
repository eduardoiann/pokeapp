const fetchPokemonCardByID = async (id) => {
  try {
    const result = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const json = await result.json();
    return json;
  } catch (error) {
    return error.message;
  }
};

export default fetchPokemonCardByID;