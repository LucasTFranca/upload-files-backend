const { StatusCodes } = require('http-status-codes');
const { getAllFilesVerification } = require('../services/fileService');

const getAllFiles = async (req, res, next) => {
  try {
    const files = await getAllFilesVerification();

    return res.status(StatusCodes.OK).json(files);
  } catch (error) {
    console.log(`GET FILES ${error}`);
    return next(error);
  }
};

module.exports = {
  getAllFiles,
};
