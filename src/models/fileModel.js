const connection = require('../utils/db/connection');

const getFiles = async () => {
  const db = await connection();

  const files = await db.collection('files').find({}).toArray();

  return files;
};

module.exports = {
  getFiles,
};
