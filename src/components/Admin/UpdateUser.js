import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateUser() {
    const [username, setUsername] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !newUsername || !email) {
            setErrorMessage('All fields are required.');
            return;
        }

        setErrorMessage('');
        setIsSubmitting(true);

        try {
            const response = await axios.put(
                `http://localhost:8080/admin/update-user-by-username/${username}`,
                { username: newUsername, email }
            );

            alert('User updated successfully');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error updating user:', error);
            setErrorMessage('Error updating user. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: '100%',
        height: '45px',
        fontSize: '16px',
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        outline: 'none',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'border-color 0.3s',
    };

    const buttonStyle = {
        width: '100%',
        height: '50px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s, transform 0.2s',
    };

    const containerStyle = {
        maxWidth: '400px',
        margin: '60px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '28px',
        color: '#333',
        marginBottom: '25px',
    };

    const errorStyle = {
        color: 'red',
        marginBottom: '15px',
        fontSize: '14px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Update User</h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div style={errorStyle}>{errorMessage}</div>}

                <input
                    type="text"
                    placeholder="Current Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="text"
                    placeholder="New Username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="email"
                    placeholder="New Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button
                    type="submit"
                    style={buttonStyle}
                    disabled={isSubmitting}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
                >
                    {isSubmitting ? 'Updating...' : 'Update'}
                </button>
            </form>
        </div>
    );
}

export default UpdateUser;
