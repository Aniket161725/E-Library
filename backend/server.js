const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const connectDB = require("./config/db.js"); 

const MONGO_URI="mongodb+srv://aniketdekate1:Aniket1621@cluster0.bd4kn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const JWT_SECRET=your_secret_key;
const PORT=5000;




require("dotenv").config();

console.log("------------------");
console.log("🔹 MONGO_URI:", MONGO_URI);
console.log("------------------");

const app = express();

// Middleware


app.use(express.json());
app.use(cors());

// Connect to MongoDB
console.log("🔹 Connecting to Database...");
connectDB();

// Routes
console.log("🔹 Setting up routes...");




app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);


// const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



