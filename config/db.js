const mongoose = require("mongoose");

const local = "mongodb+srv://shallot38hk:62WWpx8QQGvpyzTk@cluster0.4vigwt9.mongodb.net/lab3_ph42693";

const connect = async () => {
  try {
    await mongoose.connect(local);
    console.log("Connect success");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = { connect };
