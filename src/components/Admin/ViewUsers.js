import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/view-users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>View Users</h1>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul style={listStyle}>
          {users.map((user) => (
            <li key={user.id} style={listItemStyle}>
              {`ID: ${user.id}, Username: ${user.username}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// CSS Styles to match ViewBooks component
const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  backgroundColor: '#f0f0f0',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  color: '#333',
};

export default ViewUsers;
