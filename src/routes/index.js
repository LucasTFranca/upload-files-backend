const express = require('express');
const fileRouter = require('./fileRouter');

const router = express.Router();

router.use('/file', fileRouter);

module.exports = router;
