import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    // Add logic to add user (e.g., API call)
    console.log('User added:', { name, email });
    // Reset fields
    setName('');
    setEmail('');
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '400px', margin: 'auto' }}> {/* Set a max width and center the form */}
      <Typography variant="h5" align="center" gutterBottom>
        Add User
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        InputProps={{
          style: { backgroundColor: 'white' } // Set background color to white
        }}
      />
      <Button variant="contained" onClick={handleAddUser} fullWidth>
        Add User
      </Button>
    </Box>
  );
};

export default AddUser;
