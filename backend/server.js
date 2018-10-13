const express = require('express');
var formidable = require('formidable');
const bodyParser = require('body-parser');

const { docuDetect, logoDetect } = require('./vision.js');
const { storeFile } = require('./storeFile.js');



var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// file upload page
app.get('/', (req, res) => {
	app.set('view engine', 'ejs');
	res.sendFile(__dirname + '/public/imgUpload.html');
});

// takes the file in the form and store it to the file system
// 		filetoupload: the image file that th user is going to upload
app.post('/ImgInfo', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
	  var path = storeFile(files.filetoupload);
    logoDetect(path)
      .then((description) => {
        res.send(description);
      });
  });
});

app.post('/OCRText', (req, res) => {
  var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      var path = storeFile(files.filetoupload);
      docuDetect(path).then((result) => {
        res.send(result.text);
      });
    });
});

app.listen(3000, ()=> {
	console.log('Start on port 3000');
});

module.exports = {app};
