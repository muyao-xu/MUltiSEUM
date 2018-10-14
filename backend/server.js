const express = require('express');
var formidable = require('formidable');
const bodyParser = require('body-parser');
const { User } = require('./user.js');
const { docuDetect, logoDetect } = require('./vision.js');
const { storeFile } = require('./storeFile.js');
const { getQueryName, getQueryLanguage, getExtract } = require('./wiki.js');



var app = express();
var user = new User();
user.setLanguage('zh');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// file upload page
app.get('/', (req, res) => {
	app.set('view engine', 'ejs');
	res.sendFile(__dirname + '/public/imgUpload.html');
});

app.get('/user/:language', (req, res) => {
	var language = req.params.language;

	user.setLanguage(language);
	// console.log(user);
});

app.post('/ImgInfo', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, (err, fields, files) => {
	  var path = storeFile(files.filetoupload);
    logoDetect(path)
      .then((description) => {
        res.send(description);
      })
			.catch((err) => {
				res.status(404).send(err);
			});
  });
});

app.post('/OCRText', (req, res) => {
  var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      var path = storeFile(files.filetoupload);
      docuDetect(path)
				.then((result) => {
        	res.send(result.text);
      	})
    });
});

app.get('/Info/:query/:language', (req, res) => {
  var query = req.params.query;
  var language = req.params.language;
  getQueryName(query)
    .then((encodedTitle) => {
      if (language === 'en') {
        getExtract(encodedTitle, 'en')
          .then((info) => {
            // console.log(extract);
						var language = user.getLanguage();
						user.addItem({
							title: info.title,
							extract: info.extract,
							url: `https://${language}.wikipedia.org/wiki/${encodedTitle}`
						});
						console.log(user);
            res.send(info);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        getQueryLanguage(encodedTitle, language)
          .then((translateTitle) => {
            getExtract(translateTitle, language)
						.then((info) => {
							// console.log(extract);
							var language = user.getLanguage();
							user.addItem({
								title: info.title,
								extract: info.extract,
								url: `https://${language}.wikipedia.org/wiki/${info.title}`
							});
							// console.log(user);
							res.send(info);
						})
              .catch((err) => {
                console.log(err);
              });
          });
      }
    });
});

app.get('/List', (req, res) => {
	console.log(user.getList());
	res.send(user.getList());
})

app.listen(3000, ()=> {
	console.log('Start on port 3000');
});

module.exports = {app};
