// POST /ImgInfo
var data = new FormData();
data.append('filetoupload', {
  // change only the next two linesbv
  uri: '/Users/muyaoxu/Desktop/test.JPG',
  name: 'test.JPG',
  type: 'image.jpg'
});

fetch('http://localhost:3000/ImgInfo', {
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  method: 'POST',
  body: data
})
.then((response) => {
  console.log(response);
  // Alert.alert(response._bodyText);
})
.catch((error) => {
  console.error(error);
});


// GET /Info/:query/:language
fetch('http://localhost:3000/Info/sunflowers%20van%20gogh/en')
  .then((response) => {
    var description = response._bodyText;
  })
  .catch((error) => {
    console.error(error);
  });

// POST /OCRTEXT
