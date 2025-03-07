const express = require("express");
const { registerUser, loginUser, getUserProfile } = require("../controller/userController.js");

console.log("🔹 registerUser:", registerUser);
console.log("🔹 loginUser:", loginUser);
console.log("🔹 getUserProfile:", getUserProfile);


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

module.exports = router;
