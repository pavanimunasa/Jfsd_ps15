import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/admin/update-book/${bookId}`, { title, author });
      alert("Book updated successfully");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book");
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
    backgroundColor: '#28A745',
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
      <h1 style={headingStyle}>Update Book</h1>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="New Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleUpdate} style={buttonStyle}>Update Book</button>
    </div>
  );
};

export default UpdateBook;
