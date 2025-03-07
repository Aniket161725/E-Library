const mongoose = require("mongoose");

const MONGO_URI="mongodb+srv://aniketdekate1:Aniket1621@cluster0.bd4kn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
