import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box, Button, Typography, Grid,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, CircularProgress
} from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check authentication and fetch users on component mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login'); // Redirect if not authenticated
    } else {
      setIsAuthenticated(true);
      fetchUsers(); // Fetch user data
    }
  }, [navigate]);

  // Fetch user data
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/admin/view-users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // Include token for auth
        }
      });
      setUsers(response.data); // Set fetched users
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Render a loading spinner if the data is still loading
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Render an error message if there's an issue fetching the data
  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
        <Button onClick={fetchUsers} variant="contained" color="primary" sx={{ mt: 2 }}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Action Buttons */}
      <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        {/* User Buttons */}
        <Grid item>
          <Link to="/admin/add-user" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Add User</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/update-user" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">Update User</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/delete-user" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="error">Delete User</Button>
          </Link>
        </Grid>

        {/* Book Buttons */}
        <Grid item>
          <Link to="/admin/add-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">Add Book</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/update-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="secondary">Update Book</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/delete-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="error">Delete Book</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/admin/view-book" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">View Book</Button>
          </Link>
        </Grid>
      </Grid>

      {/* User Details Table */}
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      {users.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          No users found.
        </Typography>
      )}
    </Box>
  );
};

export default AdminDashboard;
