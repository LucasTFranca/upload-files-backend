const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, path.resolve(__dirname, '..', 'files')),
  filename: (_req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage }).single('file');

module.exports = upload;
