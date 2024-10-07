import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    // Add logic to add book (e.g., API call)
    console.log('Book added:', { title, author });
    // Reset fields
    setTitle('');
    setAuthor('');
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '400px', margin: 'auto' }}> {/* Set a max width and center the form */}
      <Typography variant="h5" align="center" gutterBottom>
        Add Book
      </Typography>
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
      <Button variant="contained" onClick={handleAddBook} fullWidth>
        Add Book
      </Button>
    </Box>
  );
};

export default AddBook;
