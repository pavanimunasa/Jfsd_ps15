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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [myBooks, setMyBooks] = useState([]);
  const [overdueBooks, setOverdueBooks] = useState([
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      dueDate: '2023-12-01',
      imageUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
  ]);
  const [showSection, setShowSection] = useState('availableBooks');
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handlePayment = (book) => {
    setSelectedBook(book);
    setPaymentOpen(true);
  };

  const closePayment = () => {
    setPaymentOpen(false);
    setSelectedBook(null);
  };

  const books = [
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      available: 5,
      imageUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1anGq4rROh7DAF-c35-k7a3cizXHu9F6L',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      available: 3,
      imageUrl: 'https://imagery.pragprog.com/products/59/tpp_xlargecover.jpg?1339433898',
      downloadUrl: 'https://github.com/Software-Resources/Software-Development-Books/blob/master/The%20Pragmatic%20Programmer%2C%2020th%20Anniversary%20Edition.pdf',
    },
    {
      title: 'Code Complete',
      author: 'Steve McConnell',
      available: 4,
      imageUrl: 'https://images.thenile.io/r1000/9780735619678.jpg',
      downloadUrl: 'https://ptgmedia.pearsoncmg.com/images/9780735619678/samplepages/9780735619678a.pdf',
    },
    {
      title: 'Introduction to Networking',
      author: 'Charles Severance',
      available: 2,
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434305920l/25616802._SX318_.jpg',
      downloadUrl: '/files/introduction-to-networking.pdf',
    },
    {
      title: 'Computer Networking: A Top-Down Approach',
      author: 'James Kurose & Keith Ross',
      available: 1,
      imageUrl: 'https://cdn11.bigcommerce.com/s-phtso/images/stencil/1024x1024/products/5834/7304/9781292405469-V1__47397.1634978736.jpg?c=2',
      downloadUrl: '/files/computer-networking.pdf',
    },
    {
      title: 'Python Crash Course',
      author: 'Eric Matthes',
      available: 7,
      imageUrl: 'https://cdn2.penguin.com.au/covers/original/9781718502703.jpg',
      downloadUrl: '/files/python-crash-course.pdf',
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      available: 4,
      imageUrl: 'https://media.s-bol.com/9wVlkADkxzx/914x1200.jpg',
      downloadUrl: '/files/designing-data-intensive-applications.pdf',
    },
    {
      title: 'Network Warrior',
      author: 'Gary A. Donahue',
      available: 6,
      imageUrl: 'https://i.pinimg.com/originals/0f/cb/c8/0fcbc86d34b2663d2e4a3dd801d938af.png',
      downloadUrl: '/files/network-warrior.pdf',
    },
  ];


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const borrowBook = (book) => {
    if (!myBooks.includes(book)) {
      setMyBooks([...myBooks, book]);
    }
  };

  const displaySection = () => {
    switch (showSection) {
      case 'availableBooks':
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
                        <Button
                          size="small"
                          color="secondary"
                          startIcon={<DownloadIcon />}
                          href={book.downloadUrl}
                          download
                        >
                          Download
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

      case 'myBooks':
        return (
          <>
            <Typography variant="h6">My Borrowed Books</Typography>
            <Grid container spacing={3}>
              {myBooks.length > 0 ? (
                myBooks.map((book, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          style={{ width: 100, height: 150, objectFit: 'cover', marginRight: 16 }}
                        />
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="subtitle1">by {book.author}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography variant="subtitle1">You haven't borrowed any books.</Typography>
              )}
            </Grid>
          </>
        );

      case 'overdueBooks':
        return (
          <>
            <Typography variant="h6">Overdue Books</Typography>
            <Grid container spacing={3}>
              {overdueBooks.length > 0 ? (
                overdueBooks.map((book, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardContent>
                        <img
                          src={book.imageUrl}
                          alt={book.title}
                          style={{ width: 100, height: 150, objectFit: 'cover', marginRight: 16 }}
                        />
                        <Typography variant="h6">{book.title}</Typography>
                        <Typography variant="subtitle1">by {book.author}</Typography>
                        <Typography variant="body2">Due Date: {book.dueDate}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handlePayment(book)}
                        >
                          Pay Fine
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography variant="subtitle1">No overdue books.</Typography>
              )}
            </Grid>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Library Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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
              <ListItemText primary="My Books" />
            </ListItem>
            <ListItem button onClick={() => setShowSection('overdueBooks')}>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Overdue Books" />
            </ListItem>
            <ListItem button onClick={() => setShowSection('availableBooks')}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Available Books" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
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

      <Box component="main" sx={{ flexGrow: 1, padding: 3, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome!
        </Typography>

        <TextField
          label="Search Books"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            marginBottom: 3,
            width: { xs: '100%', sm: '75%', md: '50%' },
            backgroundColor: 'white',
            borderRadius: 1,
          }}
          InputProps={{
            startAdornment: <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />,
          }}
        />

        {displaySection()}

        {/* Payment Modal */}
        <Dialog open={paymentOpen} onClose={closePayment}>
          <DialogTitle>Pay Fine</DialogTitle>
          <DialogContent>
            <Typography variant="subtitle1">
              You are paying for: {selectedBook?.title}
            </Typography>
            <Typography variant="body2">Amount Due: ₹50.00</Typography>
            <RadioGroup>
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              <FormControlLabel value="card" control={<Radio />} label="Debit/Credit Card" />
              <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={closePayment} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                closePayment();
                alert('Payment Successful!');
              }}
              color="primary"
              variant="contained"
            >
              Pay
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
