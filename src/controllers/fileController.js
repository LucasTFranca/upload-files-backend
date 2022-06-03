const { StatusCodes } = require('http-status-codes');
const { getAllFilesVerification, getFileInfomationVerification } = require('../services/fileService');

const getAllFiles = async (req, res, next) => {
  try {
    const files = await getAllFilesVerification();

    return res.status(StatusCodes.OK).json(files);
  } catch (error) {
    console.log(`GET FILES ${error}`);
    return next(error);
  }
};

const getFileInfomation = async (req, res, next) => {
  try {
    const { file } = req;

    const fileObject = {
      fileName: file.filename,
      url: `http://localhost:4000/files/${file.filename}`,
    };

    await getFileInfomationVerification(file.filename);

    return res.status(StatusCodes.CREATED).json(fileObject);
  } catch (error) {
    console.log(`GET FILE INFOMATION ${error}`);
    return next(error);
  }
};

module.exports = {
  getAllFiles,
  getFileInfomation,
};
