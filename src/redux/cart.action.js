export const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
export const UPDATE_CART_ITEM_QUANTITY = 'cart/UPDATE_CART_ITEM_QUANTITY';
export const CLEAR_CART = 'cart/CLEAR_CART';
export const DELETE_CART_ITEM = 'cart/DELETE_CART_ITEM';
export const DELETE_CART_ITEM_QUANTITY = 'cart/DELETE_CART_ITEM_QUANTITY';


/**
 * 
 * item: ICartItem = {
 *  product,
 *  quantity: number,
 * }
 * 
 */
export const updateCartItem = item => ({
    type: UPDATE_CART_ITEM,
    item
})

export const updateCartItemQuantity = (product, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    product,
    quantity
})

export const clearCart = () => ({
    type: CLEAR_CART,
})

export const deleteCartItem = productId => ({
    type: "D",
    productId
});

export const deleteCartItemQuantity = productId => ({
    type: DELETE_CART_ITEM_QUANTITY,
    productId
});