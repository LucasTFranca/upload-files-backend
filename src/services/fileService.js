const { getFiles } = require('../models/fileModel');

const getAllFilesVerification = async () => {
  const files = await getFiles();

  return files;
};

module.exports = {
  getAllFilesVerification,
};
