import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon'; // استيراد مكون رمز عربة التسوق
import './styles.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="app">
                    <header>
                        <h1>My Plant Store</h1> {/* عنوان المتجر */}
                        <CartIcon /> {/* إضافة رمز عربة التسوق */}
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
