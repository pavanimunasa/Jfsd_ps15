import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ReturnBook = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleReturnBook = () => {
    // Add logic to return book (e.g., API call)
    console.log('Book returned:', { bookId, userId });
    // Reset fields
    setBookId('');
    setUserId('');
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '400px', margin: 'auto' }}> {/* Set a max width and center the form */}
      <Typography variant="h5" align="center" gutterBottom>
        Return Book
      </Typography>
      <TextField
        label="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <TextField
        label="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <Button variant="contained" onClick={handleReturnBook} fullWidth>
        Return Book
      </Button>
    </Box>
  );
};

export default ReturnBook;
