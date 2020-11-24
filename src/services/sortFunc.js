const sortFunc = (array) => {
  const orderedArray = array.cards.sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
return orderedArray
}

export default sortFunc;