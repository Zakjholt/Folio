const MongoClient = require("mongodb").MongoClient;

const url = process.env.DATABASE_URL;

const getClient = () => MongoClient.connect(url, { useNewUrlParser: true });

module.exports = {
  getClient
};
