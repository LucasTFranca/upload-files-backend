const { StatusCodes } = require('http-status-codes');
const { getFiles, insertFile } = require('../models/fileModel');
const errorConstructor = require('../utils/function/errorHandler');

const getAllFilesVerification = async () => {
  const files = await getFiles();

  return files;
};

const getFileInfomationVerification = async ({ fileName, url }) => {
  if (!fileName || !url) throw errorConstructor(StatusCodes.BAD_REQUEST, 'File name or url is not defined');

  await insertFile(fileName, url);
};

module.exports = {
  getAllFilesVerification,
  getFileInfomationVerification,
};
