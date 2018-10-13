const axios = require('axios');
const url = require('url');

function getQueryName(name) {
  const name = encodeURI("Le Jardin de 'lartiste à Giverny");
  const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${name}&limit=1`;
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        var returnURL = response.data[3][0];
        var arr = returnURL.split('/');
        resolve(arr[arr.length-1]);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

module.exports={getQueryName};
