import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/view-books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>View Books</h1>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewBooks;
