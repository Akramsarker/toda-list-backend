const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://test:kk2WjAScUlSUHdOM@cluster0.y55ewj3.mongodb.net/?retryWrites=true";
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(url, mongoOptions);

module.exports = client;
