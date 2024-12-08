import React, { useState } from 'react';
import axios from 'axios';

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/admin/delete-book/${bookId}`);
      alert("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book");
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
    backgroundColor: '#DC3545',
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
      <h1 style={headingStyle}>Delete Book</h1>
      <input
        type="text"
        placeholder="Enter Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleDelete} style={buttonStyle}>Delete Book</button>
    </div>
  );
};

export default DeleteBook;
