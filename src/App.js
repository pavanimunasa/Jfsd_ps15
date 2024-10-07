import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Appbar from './components/Appbar';
import { Home, Error } from './components/Home';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Admin from './components/Admin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AddUser from './components/Admin/AddUser';
import UpdateUser from './components/Admin/UpdateUser';
import DeleteUser from './components/Admin/DeleteUser';
import AddBook from './components/Admin/AddBook';
import UpdateBook from './components/Admin/UpdateBook';
import IssueBook from './components/Admin/IssueBook';
import ReturnBook from './components/Admin/Return';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App({ store }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Conditionally render the Appbar based on the current route */}
      {location.pathname !== '/dashboard' && <Appbar store={store} />}

      <div className="App-body">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Signin />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/update-user" element={<UpdateUser />} />
          <Route path="/admin/delete-user" element={<DeleteUser />} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/update-book" element={<UpdateBook />} />
          <Route path="/admin/issue-book" element={<IssueBook />} />
          <Route path="/admin/return-book" element={<ReturnBook />} />
        </Routes>
      </div>
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
