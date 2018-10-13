const express = require('express');
var formidable = require('formidable');
var fs = require('fs');
const bodyParser = require('body-parser');

const {docuDetect} = require('./vision.js');
const {logoDetect} = require('./visionLogos.js');

const IMAGE_PATH = __dirname + '/files/';

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// file upload page
app.get('/', (req, res) => {
	app.set('view engine', 'ejs');
	res.sendFile(__dirname + '/public/fileupload.html');
});

// takes the file in the form and store it to the file system
// 		roomID: id of current user's room
// 		filetoupload: the image file that th user is going to upload
app.post('/getInfo', (req, res) => {
	var form = new formidable.IncomingForm();
  	form.parse(req, (err, fields, files) => {
  	  var roomID = fields.roomID;
  	  // save to local file system
  	  var oldpath = files.filetoupload.path;
  	  var newpath = IMAGE_PATH + files.filetoupload.name;
      console.log('oldpath', oldpath);
      console.log('new paht', newpath);
  	  fs.rename(oldpath, newpath, (err) => {
  	  	if (err) throw err;
  	  });

      // docuDetect(newpath);
      logoDetect(newpath).then(() => {
        console.log(description);
      });
    });
});

app.post('/upload', (req, res) => {
  var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      storeFile(files.filetoupload);

      // // docuDetect(newpath);
      // logoDetect(newpath).then(() => {
      //   console.log(description);
      // });
    });
})

// save file to the local file system
function storeFile(file) {
  var newpath = IMAGE_PATH + file.name;
  fs.rename(file.path, newpath, (err) => {
    if (err) throw err;
  });
  return newpath;
}


app.listen(3000, ()=> {
	console.log('Start on port 3000');
});

module.exports = {app};
