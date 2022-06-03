const connection = require('../utils/db/connection');

const getFiles = async () => {
  const db = await connection();

  const files = await db.collection('files').find({}).toArray();

  return files;
};

const insertFile = async (fileName, url) => {
  const db = await connection();

  await db.collection('files').insertOne({ fileName, url });
};

const findFile = async (name) => {
  const db = await connection();

  const file = await db.collection('files').findOne({ fileName: name });

  return file;
};

module.exports = {
  getFiles,
  insertFile,
  findFile,
};
