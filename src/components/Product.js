import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // تأكد من استيراد الإجراء الصحيح

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product)); // إضافة المنتج إلى عربة التسوق
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button> {/* زر إضافة إلى العربة */}
        </div>
    );
};

export default Product;