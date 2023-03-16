const request = require('request');

const api = 'https://api.thecatapi.com/v1/breeds/search?name=';
const search = process.argv.slice(2);

const getCat = request(api + search, function(err, response, body) {

  if (err) {
    console.log(err);
  }

  const data = JSON.parse(body);

  if (data[0] !== undefined && search[0].toLowerCase === data[0]['name'].toLowerCase) {
    return console.log(data[0]['description']);
  }

  return console.log(`${search[0]} breed not found`);
});

getCat;