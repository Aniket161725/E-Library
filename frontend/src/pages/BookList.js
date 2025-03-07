import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/BookList.css";
import "../styles/BookList.css";


const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${"http://localhost:5000/api"}/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching books", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await axios.delete(`${"http://localhost:5000/api"}/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div className="book-list">
      <h2>Books</h2>
      <Link to="/add-book" className="btn">➕ Add New Book</Link>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <Link to={`/edit-book/${book._id}`} className="btn">✏️ Edit</Link>
            <button onClick={() => handleDelete(book._id)} className="btn delete">🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
