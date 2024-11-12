import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // تأكد من استيراد الإجراء المناسب

const Plant = ({ plant }) => {
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(plant)); // إضافة النبات إلى عربة التسوق
        setIsAdded(true); // تعطيل الزر
    };

    return (
        <div className="plant">
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>Price: ${plant.price}</p>
            <button 
                onClick={handleAddToCart} 
                disabled={isAdded} // تعطيل الزر إذا تم إضافته
            >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default Plant;