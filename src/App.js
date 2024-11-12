import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon';
import './styles.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <header>
                        <h1>Welcome to My Plant Store</h1>
                        <p>Your one-stop shop for all your plant needs!</p>
                        <CartIcon />
                    </header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
