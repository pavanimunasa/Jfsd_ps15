import './App.css';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import Appbar from './components/Appbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import AdminSignIn from './components/Auth/AdminSignin';
import AdminSignUp from './components/Auth/AdminSignup';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddUser from './components/Admin/AddUser';
import UpdateUser from './components/Admin/UpdateUser';
import DeleteUser from './components/Admin/DeleteUser';
import AddBook from './components/Admin/AddBook';
import UpdateBook from './components/Admin/UpdateBook';
import DeleteBook from './components/Admin/DeleteBook';
import ViewBooks from './components/Admin/ViewBooks';
import IssueBook from './components/Admin/IssueBook';
import ReturnBook from './components/Admin/Return'; // Import corrected
import Footer from './components/Footer'; // Import Footer component
import Payment from './components/Payment'; // Import Payment component

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App({ store }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Render Appbar only if not on the dashboard */}
      {location.pathname !== '/dashboard' && <Appbar store={store} />}

      <div className="App-body">
        <Routes>
          {/* Default Route Redirecting to Home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Authentication Routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Admin Authentication */}
          <Route path="/admin-signup" element={<AdminSignUp />} />
          <Route path="/admin-login" element={<AdminSignIn />} />

          {/* Admin Dashboard */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* User Management */}
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/update-user" element={<UpdateUser />} />
          <Route path="/admin/delete-user" element={<DeleteUser />} />

          {/* Book Management */}
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/update-book" element={<UpdateBook />} />
          <Route path="/admin/view-book" element={<ViewBooks />} />
          <Route path="/admin/delete-book" element={<DeleteBook />} />

          {/* Book Transactions */}
          <Route path="/admin/issue-book" element={<IssueBook />} />
          <Route path="/admin/return-book" element={<ReturnBook />} />

          {/* Payment Route */}
          <Route path="/payment" element={<Payment />} /> {/* Add this route */}

          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>

      {/* Footer included on all pages except Dashboard */}
      {location.pathname !== '/dashboard' && <Footer />}
    </div>
  );
}

export default function AppWrapper(props) {
  return (
    <Router>
      <App {...props} />
    </Router>
  );
}
