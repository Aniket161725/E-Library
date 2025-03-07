import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Forms.css";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "" ,description:"" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      navigate("/books");
    } catch (error) {
      console.error("Error adding book", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={book.author}
            onChange={handleChange}
            required
          />
          <input type="text" 
          name="description" 
          placeholder="Description" 
          value={book.description} 
          onChange={handleChange} 
          required 
          />
          <button type="submit">📚 Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
