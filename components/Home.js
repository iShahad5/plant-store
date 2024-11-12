import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // تأكد من استيراد ملف CSS

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to the Plant Store</h1> {/* اسم الشركة */}
                <p>Welcome to our Plant Store, your ultimate destination for indoor plants and greenery! We are passionate about bringing nature into your home and helping you create a serene and vibrant environment. Our diverse selection of plants caters to both novice and experienced plant lovers, ensuring that everyone can find the perfect addition to their living space. With a commitment to quality and customer satisfaction, we provide expert advice and care tips to help you thrive in your plant journey. Join us in celebrating the beauty of nature!</p> {/* فقرة حول الشركة */}
                <Link to="/products">
                    <button className="start-button">Get Started</button> {/* زر البدء */}
                </Link>
            </div>
        </div>
    );
};

export default Home;