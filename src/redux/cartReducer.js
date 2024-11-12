import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM } from './actions';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, { ...action.payload, quantity: 1 }]; // إضافة كمية 1
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload); // إزالة المنتج
        case INCREASE_ITEM:
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 } // زيادة الكمية
                    : item
            );
        case DECREASE_ITEM:
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity - 1 } // تقليل الكمية
                    : item
            ).filter(item => item.quantity > 0); // إزالة العناصر ذات الكمية 0
        default:
            return state;
    }
};

export default cartReducer;