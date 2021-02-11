const request = require('request');
const args = process.argv.splice(2,1);
console.log(args[0]);




request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {

  if (error) {
    return console.log(`MALFORMED URL => ${error}`);
  }

  const data = JSON.parse(body);

  if (data.length > 0) {
    const data = JSON.parse(body);
    console.log(data[0].description);

  } else {
    console.log(`No breed matching your search '${args[0]}' was found.`);
  }

});