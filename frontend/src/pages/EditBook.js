import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Forms2.css";

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({ title: "", author: "", description: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      navigate("/books");
    } catch (error) {
      console.error("Error updating book", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="book-form">
        <h2 className="form-title">📚 Edit Book</h2>
        <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={book.description} onChange={handleChange} required />
        <button type="submit" className="btn update-btn">✅ Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;

