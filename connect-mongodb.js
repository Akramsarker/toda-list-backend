const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
// const dotenv = require("dotenv");

// if (process.env.NODE_ENV === "local") {
//   dotenv.config();
// }

// const url = process.env.MONGO_DB_URI;
const url =
  "mongodb+srv://test:kk2WjAScUlSUHdOM@cluster0.y55ewj3.mongodb.net/?retryWrites=true&w=majority";

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(url, mongoOptions);

module.exports = client;
