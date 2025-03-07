import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books", error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div className="library-container">
      <div className="book-list">
        <h2 className="book-title">📖 Library Collection</h2>
        <Link to="/add-book" className="btn add-btn">➕ Add New Book</Link>
        <ul className="book-grid">
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book._id} className="book-card">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <div className="book-actions">
                  <Link to={`/edit-book/${book._id}`} className="btn edit-btn">✏️ Edit</Link>
                  <button onClick={() => handleDelete(book._id)} className="btn delete-btn">🗑️ Delete</button>
                </div>
              </li>
            ))
          ) : (
            <p className="no-books">No books available. Add some!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
