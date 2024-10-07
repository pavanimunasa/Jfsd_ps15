import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const UpdateBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleUpdateBook = () => {
    // Add logic to update book (e.g., API call)
    console.log('Book updated:', { bookId, title, author });
    // Reset fields
    setBookId('');
    setTitle('');
    setAuthor('');
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '400px', margin: 'auto' }}> {/* Set a max width and center the form */}
      <Typography variant="h5" align="center" gutterBottom>
        Update Book
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
        label="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <Button variant="contained" onClick={handleUpdateBook} fullWidth>
        Update Book
      </Button>
    </Box>
  );
};

export default UpdateBook;
