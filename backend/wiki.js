const axios = require('axios');

function getQueryName(name) {
  name = encodeURI(name);
  const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${name}&limit=1`;
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then((response) => {
        var returnURL = response.data[3][0];
        var arr = returnURL.split('/');
        console.log(URL) ;
        console.log(arr[arr.length-1]);
        resolve(arr[arr.length-1]);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

function getQueryLanguage(encodedTitle, language) {
  const URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=langlinks&titles=${encodedTitle}&utf8=1&llprop=url&lllang=${language}`;
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then((response) => {
        var pages = response.data.query.pages;
        var why = Object.keys(pages)[0];
        var langlinks = Object.values(pages)[0].langlinks;
        var translate = Object.values(langlinks[0])[2];
        console.log(translate);
      });
  });
};

getQueryLanguage("Sunflowers_(Van_Gogh_series)", "zh");

module.exports={getQueryName};
