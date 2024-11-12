import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM } from './actions';

const initialState = {
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
            if (existingProduct) {
                // إذا كان المنتج موجودًا بالفعل، نقوم بزيادة الكمية
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === existingProduct.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                // إذا لم يكن موجودًا، نضيفه مع كمية 1
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            // إزالة المنتج من عربة التسوق
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        case INCREASE_ITEM:
            // زيادة الكمية للمنتج المحدد
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case DECREASE_ITEM:
            // تقليل الكمية للمنتج المحدد
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ).filter(item => item.quantity > 0), // إزالة العناصر ذات الكمية 0
            };
        default:
            return state;
    }
};

export default reducer;