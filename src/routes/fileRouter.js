const express = require('express');
const { getAllFiles } = require('../controllers/fileController');

const fileRouter = express.Router();

fileRouter.get('/', getAllFiles);

// fileRouter.post('/upload', );

// fileRouter.get('/download/:name', );

module.exports = fileRouter;
