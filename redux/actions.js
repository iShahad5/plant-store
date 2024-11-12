export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';

// إجراء لإضافة منتج إلى عربة التسوق
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
});

// إجراء لإزالة منتج من عربة التسوق
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

// إجراء لزيادة كمية منتج في عربة التسوق
export const increaseItem = (id) => ({
    type: INCREASE_ITEM,
    payload: id,
});

// إجراء لتقليل كمية منتج في عربة التسوق
export const decreaseItem = (id) => ({
    type: DECREASE_ITEM,
    payload: id,
});