const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const testfileName = __dirname + '/files/art.jpeg';

// Performs logo detection on the local file
function logoDetect (fileName) {
    return new Promise((resolve, reject) => {
      client
        .logoDetection(fileName)
        .then(results => {
          const logos = results[0].logoAnnotations;
          // console.log('Logos:');
          // logos.forEach(logo => console.log(logo));
          // console.log(logos[0].description);
          // return logos[0].description;
          resolve(logos[0].description);
        })
        .catch(err => {
          console.error('ERROR:', err);
          reject(err);
        });
});
}

module.exports = {logoDetect};
