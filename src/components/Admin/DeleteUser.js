import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8080/admin/delete-user/${userId}`);
      alert(response.data); // Display success or error message from the backend
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please try again.');
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
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
    backgroundColor: '#DC3545', // Red for delete action
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  return (
    <Box style={containerStyle}>
      <Typography style={headingStyle} variant="h5">Delete User by ID</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          margin="normal"
          style={inputStyle}
        />
        <Button type="submit" variant="contained" color="error" style={buttonStyle}>
          Delete User
        </Button>
      </form>
    </Box>
  );
};

export default DeleteUser;
