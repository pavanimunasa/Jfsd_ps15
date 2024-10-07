import React, { useState } from 'react';

function Contact() {
    // State to hold form values and validation errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form validation function
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name) {
            isValid = false;
            errors['name'] = 'Please enter your name.';
        }

        if (!formData.email) {
            isValid = false;
            errors['email'] = 'Please enter your email.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            errors['email'] = 'Please enter a valid email address.';
        }

        if (!formData.subject) {
            isValid = false;
            errors['subject'] = 'Please enter a subject.';
        }

        if (!formData.message) {
            isValid = false;
            errors['message'] = 'Please enter a message.';
        }

        setErrors(errors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form is valid, handle submission (e.g., send data to server)
            setSubmitted(true);
            console.log('Form submitted successfully:', formData);

            // Clear form data after submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }
    };

    return (
        <div style={{ fontSize: '18px', maxWidth: '600px', margin: 'auto', padding: '30px' }}>
            <h1 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>

            {submitted && <p style={{ color: 'green', textAlign: 'center' }}>Thank you for contacting us! We will get back to you soon.</p>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    />
                    {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                    ></textarea>
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button
                        type="submit"
                        style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'darkblue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
