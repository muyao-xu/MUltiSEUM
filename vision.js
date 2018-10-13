// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
// const fileName = __dirname + '/files/homework.png';

// Read a local image as a text document
function docuDetect (fileName) {
  client
    .documentTextDetection(fileName)
    .then(results => {
      const fullTextAnnotation = results[0].fullTextAnnotation;
      console.log(`Full text: ${fullTextAnnotation.text}`);
      return fullTextAnnotation;
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

module.exports = {docuDetect};
