const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,desc, body) => {

     
    if (error) {
      // let err = `${error}`;
      return callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length > 0) {
      const data = JSON.parse(body);
      desc = data[0].description;

    } else {
      desc = `No breed matching your search '${breedName}' was found.`;
      
    }

    return callback(error, desc);
  });



};




 



module.exports = { fetchBreedDescription };