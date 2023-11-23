require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    
    console.log("Database connected");
    
  } catch (err) {
    console.log(err);
  }
}
connectToDatabase();

exports.mongoose = mongoose; 

