const axios = require('axios');

// the domain name for the artwork
function getQueryName(name) {
  name = encodeURI(name);
  const URL = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${name}&limit=1`;
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then((response) => {
        var returnURL = response.data[3][0];
        var arr = returnURL.split('/');
        // console.log(URL) ;
        console.log(arr[arr.length-1]);
        resolve(arr[arr.length-1]);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// get the domain name in another language
function getQueryLanguage(encodedTitle, language) {
  const URL = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=langlinks&titles=${encodedTitle}&utf8=1&llprop=url&lllang=${language}`;
  return new Promise((resolve, reject) => {
    // console.log(URL);
    axios.get(URL)
      .then((response) => {
        var pages = response.data.query.pages;
        var langlinks = Object.values(pages)[0].langlinks;
        if(langlinks === undefined) {
          reject('There is no language support for this item');
        }
        var translate = Object.values(langlinks[0])[2];
        console.log(translate);
        resolve(translate);
      });
  });
};

// get the plain text of extract
function getExtract(title, language) {
  title = encodeURI(title);
  const URL = `https://${language}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`;
  return new Promise((resolve, reject) => {
    console.log(URL);
    axios.get(URL)
      .then((response) => {
        var pages = response.data.query.pages;
        var extract = Object.values(pages)[0].extract;
        resolve(extract);
      }).catch((err)=>{
        reject (err);
      })
  })
}


getQueryName("sunflowers van gogh")
  .then((encodedTitle) => {
    getQueryLanguage(encodedTitle, "zh")
      .then((translateTitle) => {
        getExtract(translateTitle, "zh")
          .then((extract) => {
            console.log(extract);
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// getQueryLanguage(title, "zh");

module.exports={getQueryName};
