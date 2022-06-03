const { StatusCodes } = require('http-status-codes');
const { getFiles, insertFile, findFile } = require('../models/fileModel');
const errorConstructor = require('../utils/function/errorHandler');

const getAllFilesVerification = async () => {
  const files = await getFiles();

  return files;
};

const getFileInformationVerification = async ({ fileName, url }) => {
  if (!fileName || !url) throw errorConstructor(StatusCodes.BAD_REQUEST, 'File name or url is not defined');

  await insertFile(fileName, url);
};

const getFileVerification = async (name) => {
  if (!name) throw errorConstructor(StatusCodes.BAD_REQUEST, 'File name is not defined');

  const file = await findFile(name);

  if (!file) throw errorConstructor(StatusCodes.NOT_FOUND, 'File not found');
};

module.exports = {
  getAllFilesVerification,
  getFileInformationVerification,
  getFileVerification,
};
