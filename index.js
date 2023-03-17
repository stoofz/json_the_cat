const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log(error);
  if (error) {
    return (console.log('Error fetch details:', error));
  }
  return console.log(desc);
});