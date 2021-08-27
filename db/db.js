const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );
    console.log(`Connection with mongo is OK`);
  } catch (err) {
    console.log(`Failed to connect with mongo: ${err}`);
  }
}

module.exports = { dbConnection };