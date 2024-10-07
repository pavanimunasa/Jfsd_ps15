import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';

const Admin = () => {
  return (
    <Box sx={{ padding: 2, height: '90vh', overflowY: 'auto' }}>
      
      {/* Scrolling Text */}
      <Box sx={{ padding: 1, marginBottom: 3 }}>
        <Typography variant="h6" align="center" sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              color: 'black', 
              animation: 'scrolling-text 15s linear infinite',
              '@keyframes scrolling-text': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            }}
          >
            Welcome to the Admin Dashboard! Manage books, users, and more seamlessly!
          </Box>
        </Typography>
      </Box>

      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#362107' }}>
        Admin Dashboard
      </Typography>
      <Typography align="center" paragraph sx={{ color: '#5a3407' }}>
        Welcome to the Admin Panel. From here, you can manage books, users, and more.
      </Typography>

      {/* Big Grid container for Book Management and User Management */}
      <Grid container spacing={3} justifyContent="center">

        {/* Manage Books Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 3, textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
              Manage Books
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Link to="/admin/add-book" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#6200ea', color: '#ffffff' }} fullWidth>
                    Add Book
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/admin/update-book" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#03a9f4', color: '#ffffff' }} fullWidth>
                    Update Book
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/admin/issue-book" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#6200ea', color: '#ffffff' }} fullWidth>
                    Issue Book
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/admin/return-book" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#03a9f4', color: '#ffffff' }} fullWidth>
                    Return Book
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Manage Users Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 3, textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none' }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
              Manage Users
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Link to="/admin/add-user" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#6200ea', color: '#ffffff' }} fullWidth>
                    Add User
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/admin/update-user" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#03a9f4', color: '#ffffff' }} fullWidth>
                    Update User
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/admin/delete-user" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ backgroundColor: '#d32f2f', color: '#ffffff' }} fullWidth>
                    Delete User
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
