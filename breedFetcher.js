const request = require('request');

const fetchBreedDescription = function(breed, cb) {
  
  const api = `https://api.thecatapi.com/v1/breeds/search?name=${breed}`;

  request(api, function(err, response, body) {
    console.log(null);
    if (err) {
      return cb(null, err);
    }

    const data = JSON.parse(body);

    if (data[0] !== undefined && breed.toLowerCase() === data[0]['name'].toLowerCase()) {
      return cb(null, (null, data[0]['description']));
    }

    return cb(`${breed} breed not found`);
  });
};

module.exports = { fetchBreedDescription };