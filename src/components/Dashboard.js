import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; // To navigate to other pages

export default function UserDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [myBooks, setMyBooks] = useState([]); // State to track borrowed books
  const [overdueBooks, setOverdueBooks] = useState([]); // State for overdue books
  const [showSection, setShowSection] = useState('availableBooks'); // To toggle between sections
  const navigate = useNavigate(); // To handle navigation

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Sample book data with images
  const books = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      available: 5,
      imageUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      available: 3,
      imageUrl: 'https://imagery.pragprog.com/products/59/tpp_xlargecover.jpg?1339433898',
    },
    {
      title: 'Code Complete',
      author: 'Steve McConnell',
      available: 4,
      imageUrl: 'https://images.thenile.io/r1000/9780735619678.jpg',
    },
    {
      title: 'Introduction to Networking',
      author: 'Charles Severance',
      available: 2,
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434305920l/25616802._SX318_.jpg',
    },
    {
      title: 'Computer Networking: A Top-Down Approach',
      author: 'James Kurose & Keith Ross',
      available: 1,
      imageUrl: 'https://cdn11.bigcommerce.com/s-phtso/images/stencil/1024x1024/products/5834/7304/9781292405469-V1__47397.1634978736.jpg?c=2',
    },
    {
      title: 'Python Crash Course',
      author: 'Eric Matthes',
      available: 7,
      imageUrl: 'https://cdn2.penguin.com.au/covers/original/9781718502703.jpg',
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      available: 4,
      imageUrl: 'https://media.s-bol.com/9wVlkADkxzx/914x1200.jpg',
    },
    {
      title: 'Network Warrior',
      author: 'Gary A. Donahue',
      available: 6,
      imageUrl: 'https://i.pinimg.com/originals/0f/cb/c8/0fcbc86d34b2663d2e4a3dd801d938af.png',
    },
  ];

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Borrow a book and add to My Books
  const borrowBook = (book) => {
    if (!myBooks.includes(book)) {
      setMyBooks([...myBooks, book]);
    }
  };

  // Simulate overdue books (randomly selecting two books)
  const simulateOverdueBooks = () => {
    setOverdueBooks(books.slice(0, 2)); // Set first 2 books as overdue
  };

  // Handle section display (My Books, Overdue Books, Available Books)
  const displaySection = () => {
    if (showSection === 'myBooks') {
      return (
        <>
          <Typography variant="h6">My Borrowed Books</Typography>
          {myBooks.length === 0 ? (
            <Typography variant="subtitle1">No borrowed books yet.</Typography>
          ) : (
            <Grid container spacing={3}>
              {myBooks.map((book, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        style={{ width: 100, height: 150, objectFit: 'cover' }}
                      />
                      <Typography variant="h6">{book.title}</Typography>
                      <Typography variant="subtitle1">by {book.author}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      );
    }

    if (showSection === 'overdueBooks') {
      return (
        <>
          <Typography variant="h6">Overdue Books</Typography>
          {overdueBooks.length === 0 ? (
            <Typography variant="subtitle1">No overdue books.</Typography>
          ) : (
            <Grid container spacing={3}>
              {overdueBooks.map((book, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <img
                        src={book.imageUrl}
                        alt={book.title}
                        style={{ width: 100, height: 150, objectFit: 'cover' }}
                      />
                      <Typography variant="h6">{book.title}</Typography>
                      <Typography variant="subtitle1">by {book.author}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      );
    }

    return (
      <>
        <Typography variant="h6">Available Books</Typography>
        <Grid container spacing={3}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      style={{ width: 100, height: 150, objectFit: 'cover', marginRight: 16 }}
                    />
                    <Box>
                      <Typography variant="h6">{book.title}</Typography>
                      <Typography variant="subtitle1">by {book.author}</Typography>
                      <Typography variant="body2">Available: {book.available}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => borrowBook(book)}>
                      Borrow
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="subtitle1">No books found.</Typography>
          )}
        </Grid>
      </>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* App Bar */}
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Empty space for alignment */}
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <Typography variant="h6" sx={{ padding: 2 }}>
            LOGO
          </Typography>
          <List>
            <ListItem button onClick={() => setShowSection('myBooks')}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => setShowSection('myBooks')}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="My Books" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setShowSection('overdueBooks');
                simulateOverdueBooks(); // Simulate overdue books
              }}
            >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Overdue Books" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                // Redirect to home page on logout
                navigate('/');
              }}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome!
        </Typography>

        {/* Search Component */}
        <TextField
          label="Search Books"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            marginBottom: 3,
            width: { xs: '100%', sm: '75%', md: '50%' }, // Responsive width
            backgroundColor: 'white', // White background
            borderRadius: 1, // Optional: rounded corners
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray', // Border color
              },
              '&:hover fieldset': {
                borderColor: 'black', // Hover border color
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
            ),
          }}
        />

        {/* Section to Display */}
        {displaySection()}
      </Box>
    </Box>
  );
}
