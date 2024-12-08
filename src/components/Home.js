import React from "react";
import BooksSection from "./BooksSection"; // Importing the BooksSection component
import "./Home.css";

function Home() {
  // Image URL and caption for the single display
  const image = {
    src: "https://graphics-illustrations.com/wp-content/uploads/2023/05/graphicsillustrations_zoom_library_backgrounds08s.jpg",
    caption: "Welcome to the Library Management System",
  };

  return (
    <div className="home-container">
      {/* Single Image Section */}
      <div className="image-container">
        <img src={image.src} alt="Library Background" className="image-display" />
        {/* Text Overlaid on Image */}
        <div className="image-text">
          <h1 className="main-title">{image.caption}</h1>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src="https://thumbs.dreamstime.com/b/magnifying-glass-pile-old-books-search-information-to-create-work-education-facts-inspection-searching-information-158885184.jpg"
              alt="feature-1"
              className="feature-image"
            />
            <h3 className="feature-caption">Easy Book Search</h3>
          </div>
          <div className="feature-card">
            <img
              src="https://i.pinimg.com/736x/f6/bc/30/f6bc3022e214448184efada46765a2c5.jpg"
              alt="feature-2"
              className="feature-image"
            />
            <h3 className="feature-caption">Real-Time Availability</h3>
          </div>
          <div className="feature-card">
            <img
              src="https://thumbs.dreamstime.com/b/user-friendly-interface-ux-modern-concepts-vector-illustration-flat-icons-creative-graphic-objects-elements-web-design-195818591.jpg"
              alt="feature-3"
              className="feature-image"
            />
            <h3 className="feature-caption">User-Friendly Interface</h3>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="video-section">
        <h2>Watch Our Introduction</h2>
        <div className="video-container">
          <iframe
            width="70%"
            height="400px"
            src="https://www.youtube.com/embed/Y-dNW-rnMYI?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Books Section */}
      <BooksSection />

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2>About The Library Management System</h2>
        <p>
          The Library Management System (LMS) is an all-in-one solution designed to make managing books, users, and transactions seamless and efficient. Whether you're managing a small library or a large institution, our system helps you stay organized and enhance user experience.
        </p>

        <div className="about-advantage">
          <h3>Why Choose Our LMS?</h3>
          <ul>
            <li><strong>Comprehensive Management:</strong> Efficiently handle all aspects of library operations—from cataloging books to managing user accounts and borrowing transactions.</li>
            <li><strong>Real-Time Book Availability:</strong> Quickly check book availability and reserve titles without delays, making it easier for users to plan their visits.</li>
            <li><strong>User-Friendly Interface:</strong> Our platform is designed for ease of use, ensuring that both staff and users can navigate the system effortlessly with minimal training.</li>
            <li><strong>Cloud-Based Accessibility:</strong> Access the system anytime, anywhere, ensuring that you can manage the library operations from any device with an internet connection.</li>
          </ul>
        </div>

        <div className="about-how-to">
          <h3>How Does It Work?</h3>
          <p>
            Users simply sign in to their accounts to browse available books, check real-time availability, reserve items, and manage their borrowing history. The system's intuitive search and filter tools make discovering new books quick and easy.
          </p>
        </div>

        <div className="about-why-us">
          <h3>Why Is It Better Than Others?</h3>
          <p>
            Unlike traditional library management systems, our LMS offers better scalability, cloud integration, and customization options. It's specifically designed for libraries of all sizes, from small community setups to large educational institutions, with no compromise on performance or security.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
