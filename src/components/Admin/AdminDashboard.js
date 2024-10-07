import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link to="/admin/add-user">
            <Button variant="contained" color="primary" fullWidth>
              Add User
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/update-user">
            <Button variant="contained" color="secondary" fullWidth>
              Update User
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/delete-user">
            <Button variant="contained" color="error" fullWidth>
              Delete User
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/add-book">
            <Button variant="contained" color="primary" fullWidth>
              Add Book
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/update-book">
            <Button variant="contained" color="secondary" fullWidth>
              Update Book
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/issue-book">
            <Button variant="contained" color="primary" fullWidth>
              Issue Book
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/return-book">
            <Button variant="contained" color="secondary" fullWidth>
              Return Book
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
