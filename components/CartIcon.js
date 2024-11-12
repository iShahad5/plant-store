import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // حساب العدد الإجمالي للعناصر

    return (
        <div className="cart-icon">
            <span role="img" aria-label="cart">🛒</span> {/* رمز عربة التسوق */}
            {totalItems > 0 && <span className="item-count">{totalItems}</span>} {/* عرض عدد العناصر إذا كان أكبر من 0 */}
        </div>
    );
};

export default CartIcon;