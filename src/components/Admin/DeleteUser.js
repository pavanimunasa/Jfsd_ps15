import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleDeleteUser = () => {
    // Add logic to delete user (e.g., API call)
    console.log('User deleted:', userId);
    // Reset field
    setUserId('');
  };

  return (
    <Box sx={{ padding: 2, maxWidth: '400px', margin: 'auto' }}> {/* Set a max width and center the form */}
      <Typography variant="h5" align="center" gutterBottom>
        Delete User
      </Typography>
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
      <Button variant="contained" onClick={handleDeleteUser} fullWidth>
        Delete User
      </Button>
    </Box>
  );
};

export default DeleteUser;
