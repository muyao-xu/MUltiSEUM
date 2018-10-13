var fs = require('fs');
const IMAGE_PATH = __dirname + '/files/';

// save file to the local file system
function storeFile(file) {
  var newpath = IMAGE_PATH + file.name;
  fs.rename(file.path, newpath, (err) => {
    if (err) throw err;
  });
  return newpath;
}

module.exports={storeFile};
