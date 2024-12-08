import React, { useState } from "react";
import Axios from "axios";

const AddUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = { username, email, password };

        try {
            const response = await Axios.post("http://localhost:8080/admin/add-user", newUser);
            console.log("User added successfully:", response.data);
            setSuccess("User added successfully!");
            setError(null);
        } catch (error) {
            console.error("Error adding user:", error);
            if (error.response) {
                setError(error.response.data.message || "Unknown error occurred");
            } else if (error.request) {
                setError("No response from server.");
            } else {
                setError("Request setup error: " + error.message);
            }
            setSuccess(null);
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

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
                >
                    Add User
                </button>
            </form>

            {success && <div style={{ color: "green", marginTop: "15px" }}>{success}</div>}
            {error && <div style={{ color: "red", marginTop: "15px" }}>{error}</div>}
        </div>
    );
};

export default AddUser;
