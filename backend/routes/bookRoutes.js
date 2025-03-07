const express = require("express");
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require("../controller/bookController.js");

const router = express.Router();

console.log("🔹 getBooks:", getBooks);
console.log("🔹 getBookById:", getBookById);
console.log("🔹 createBook:", createBook);

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);  // Update a book
router.delete("/:id", deleteBook); // Delete a book






module.exports = router;
