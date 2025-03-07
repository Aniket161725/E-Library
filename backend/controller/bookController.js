const Book = require("../models/Books.js");

// @desc Get all books
// @route GET /api/books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get book by ID
// @route GET /api/books/:id
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new book
// @route POST /api/books
const createBook = async (req, res) => {
  const { title, author, description } = req.body;

  try {
    const book = new Book({ title, author, description });
    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description },
      { new: true } // Return updated book
    );
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Error updating book" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting book" });
  }
};

module.exports = { getBooks, getBookById, createBook ,  updateBook, deleteBook };
