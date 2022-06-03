const express = require('express');
const { getAllFiles, getFileInfomation } = require('../controllers/fileController');
const upload = require('../middlewares/upload');

const fileRouter = express.Router();

fileRouter.get('/', getAllFiles);

fileRouter.post('/upload', upload, getFileInfomation);

// fileRouter.get('/download/:name', );

module.exports = fileRouter;
