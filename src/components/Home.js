function Home() {
    return (
        <div style={{ fontSize: '20px', maxWidth: '900px', margin: 'auto', padding: '30px' }}>
            {/* Scrolling Welcome Text */}
            <marquee style={{ fontSize: '35px', color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>
                Welcome to the Library Management System - Enhancing Your Library Experience!
            </marquee>
            <p style={{ animation: 'fadeIn 2s ease-in' }}>
                Our Library Management System is a comprehensive tool that helps libraries manage their inventory, streamline operations, and provide an improved user experience for both staff and patrons. With real-time access to book availability, account information, and borrowing history, managing a library has never been easier.
            </p>

            {/* First image section with animation */}
            <div style={{ textAlign: 'center', marginBottom: '30px', animation: 'slideUp 1s' }}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-library-2974858-2487830.png" alt="Library Shelves" style={{ width: '200px', transform: 'scale(1)' }} />
                <p>Discover a world of books with our organized shelving system, ensuring easy access to all your favorites.</p>
            </div>

            <h2 style={{ fontSize: '30px', animation: 'fadeIn 1.5s' }}>Features of the System</h2>
            <p style={{ animation: 'fadeIn 1.5s' }}>
                The system offers a range of features, including:
                <ul>
                    <li>Book cataloging with detailed metadata</li>
                    <li>Member account management</li>
                    <li>Real-time availability and reservation system</li>
                    <li>Automated overdue notifications</li>
                </ul>
            </p>

            {/* Second image section with animation */}
            <div style={{ textAlign: 'center', marginBottom: '30px', animation: 'zoomIn 1s' }}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-library-8086690-6515657.png" alt="Library Computer System" style={{ width: '300px', transition: 'transform 0.5s ease' }} />
                <p>Our digital catalog makes searching for books and managing reservations simple and efficient.</p>
            </div>

            <h2 style={{ fontSize: '30px', animation: 'fadeIn 2s' }}>Why Choose Our Library System?</h2>
            <p style={{ animation: 'fadeIn 2s' }}>
                We understand the unique challenges that come with managing a library, from maintaining an updated catalog to ensuring smooth borrowing processes. Our system is designed to alleviate these challenges with its user-friendly interface and comprehensive backend management.
            </p>

            {/* Third image section with animation */}
            <div style={{ textAlign: 'center', marginBottom: '20px', animation: 'slideUp 1.5s' }}>
                <img src="https://image.freepik.com/free-vector/book-library-illustration_124046-163.jpg" alt="Librarian helping a user" style={{ width: '200px' }} />
                <p>Friendly interface allows librarians and staff to assist users easily, enhancing the overall library experience.</p>
            </div>

            <h2 style={{ fontSize: '30px', animation: 'fadeIn 2s' }}>Get Started Today</h2>
            <p style={{ animation: 'fadeIn 2s' }}>
                Join hundreds of libraries that have transformed their services with our system. Whether you're managing a small local library or a large academic institution, our Library Management System will simplify your tasks and improve user satisfaction.
            </p>

            {/* Fourth image section with animation */}
            <div style={{ textAlign: 'center', marginBottom: '20px', animation: 'zoomIn 1s' }}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/boy-getting-book-from-library-7034313-5714930.png" alt="Library users reading" style={{ width: '200px' }} />
                <p>Help your users enjoy a seamless experience, from finding the right books to checking them out efficiently.</p>
            </div>
        </div>
    );
}

function Error() {
    return "Error Page";
}

export { Home, Error };
