import React, { useState } from "react";
import "./BooksSection.css";

function BooksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const books = [
    {
      title: "Orbital",
      author: "Samantha Harvey",
      image: "https://i.ebayimg.com/images/g/7N8AAOSwAhhnNzsd/s-l400.jpg",
    },
    {
      title: "The Satvic Revolution",
      author: "Subah Saraf & Harshvardhan Saraf",
      image: "https://m.media-amazon.com/images/I/81ghaa8j4cL._SY342_.jpg",
    },
    {
      title: "Don't Believe Everything You Think",
      author: "Joseph Nguyen",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1648738209i/60726415.jpg",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    },
    {
      title: "Selected Stories",
      author: "Fyodor Dostoyevsky",
      image: "https://i5.walmartimages.com/seo/Selected-Stories-By-Fyodor-Dostoyevsky-Paperback-9788129135216_a4fd1e58-bd03-466f-b969-777deda5b204.08b7a7fdde036d1212104b128454fbd7.jpeg",
    },
    {
      title: "Night Night on the Farm",
      author: "The Parragon",
      image: "https://tse2.mm.bing.net/th?id=OIP.jIM39TWRk4SD1uExKOxsCgHaHa&pid=Api&P=0&h=180",
    },
    {
      title: "ADHD Guide to Career Success",
      author: "Kathleen G. Nadeau",
      image: "https://media.s-bol.com/gvonJA7yKn9/550x826.jpg",
    },
  ];

  const handleBorrowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="books-section">
      <h2 className="books-section-title">Most Borrowed Books Last Month</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <button className="borrow-button" onClick={handleBorrowClick}>
              Borrow Book
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Sign In Required</h3>
            <p>You must sign in to borrow books.</p>
            <button
              className="modal-signin-button"
              onClick={() => (window.location.href = "/signin")}
            >
              Go to Sign In
            </button>
            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BooksSection;
