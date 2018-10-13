const axios = require('axios');



function getQueryName(name) {
  var name = 'Le%20Jardin%20de%20l%27artiste%20à%20Giverny';
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
