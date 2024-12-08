import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/admin/add-book", { title, author });
      alert("Book added successfully");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book");
    }
  };

  const inputStyle = {
    width: '300px',
    height: '40px',
    fontSize: '16px',
    margin: '10px 0',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '320px',
    height: '45px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
