import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const IssueBook = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    try {
      await axios.post(
        `http://localhost:8080/admin/issue-book`,
        { bookId, userId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Book issued successfully');
    } catch (error) {
      console.error('Error issuing book:', error);
      alert('Failed to issue book');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Issue Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Issue
        </Button>
      </form>
    </Box>
  );
};

export default IssueBook;
