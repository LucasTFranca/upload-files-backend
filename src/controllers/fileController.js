const path = require('path');
const { StatusCodes } = require('http-status-codes');
const { getAllFilesVerification, getFileInformationVerification, getFileVerification } = require('../services/fileService');

const getAllFiles = async (req, res, next) => {
  try {
    const files = await getAllFilesVerification();

    return res.status(StatusCodes.OK).json(files);
  } catch (error) {
    console.log(`GET FILES ${error}`);
    return next(error);
  }
};

const getFileInformation = async (req, res, next) => {
  try {
    const { file } = req;

    const fileObject = {
      fileName: file.filename,
      url: `http://localhost:4000/files/${file.filename}`,
    };

    await getFileInformationVerification(fileObject);

    return res.status(StatusCodes.CREATED).json(fileObject);
  } catch (error) {
    console.log(`GET FILE INFOMATION ${error}`);
    return next(error);
  }
};

const getFile = async (req, res, next) => {
  try {
    const { name } = req.params;
    const pathFile = path.join(__dirname, `../files/${name}`);

    await getFileVerification(name);

    return res.status(StatusCodes.OK).sendFile(pathFile);
  } catch (error) {
    console.log(`GET FILE ${error}`);
    return next(error);
  }
};

module.exports = {
  getAllFiles,
  getFileInformation,
  getFile,
};
