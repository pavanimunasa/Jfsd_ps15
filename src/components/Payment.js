import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const location = useLocation(); // Access the passed state data
  const { bookTitle, fineInUSD, fineInINR, dueDate } = location.state || {}; // Retrieve state

  const [amount, setAmount] = useState(fineInINR || ''); // Default to INR fine amount
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  // Function to generate Razorpay order from the backend
  const createRazorpayOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-order', {
        amount: fineInINR,
        currency: 'INR',
      });
      setOrderId(response.data.id); // Set the Razorpay order ID
      initializeRazorpayPayment(response.data);
    } catch (error) {
      console.error('Error creating order', error);
      setErrorMessage('Failed to create Razorpay order');
    }
  };

  // Function to initialize Razorpay checkout
  const initializeRazorpayPayment = (order) => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: order.amount, // Amount in paise
      currency: order.currency,
      name: bookTitle,
      description: `Fine Payment for ${bookTitle}`,
      image: 'https://example.com/logo.png', // Your company logo
      order_id: order.id, // Razorpay order ID
      handler: function (response) {
        // Handle the response after payment
        setMessage('Payment successful!');
        console.log('Payment successful', response);
        // Here you can also send payment details to your server for validation
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254', // Change the color if needed
      },
      modal: {
        ondismiss: function () {
          // Handle when the user closes the Razorpay modal
          setErrorMessage('Payment was dismissed.');
        },
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = () => {
    if (!amount || amount <= 0) {
      setErrorMessage('Please enter a valid amount.');
      return;
    }

    setMessage('Creating order...');
    createRazorpayOrder();
  };

  useEffect(() => {
    // If there’s no passed data, show an error message
    if (!bookTitle || !fineInUSD) {
      setErrorMessage('Payment data is missing.');
    }
  }, [bookTitle, fineInUSD]);

  return (
    <div>
      <h2>Pay Fine for {bookTitle}</h2>
      <p>Your Fine: ₹{fineInINR.toFixed(2)} (or ${fineInUSD.toFixed(2)})</p>
      
      {message && <div className="message-success">{message}</div>}
      {errorMessage && <div className="message-error">{errorMessage}</div>}
      
      <div>
        <label>Enter Amount to Pay:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
