import {
    CLEAR_CART,
    UPDATE_CART_ITEM,
    UPDATE_CART_ITEM_QUANTITY,
    DELETE_CART_ITEM,
    DELETE_CART_ITEM_QUANTITY
} from './cart.action';

export const cartReducer = (state = { items: [] }, action) => {
    switch (action.type) {

        case CLEAR_CART:
            return { items: [] };


        case UPDATE_CART_ITEM:
            const newItem = action.item;
            if (newItem && newItem.quantity > 0) {
                const index = state.items.findIndex(it => it.product.id === newItem.product.id);
                const newItems = [...state.items];
                if (index !== -1) {
                    newItems[index] = { ...newItem };
                } else {
                    newItems.push({ ...newItem });
                }
                return { ...state, items: newItems };
            } else {
                const items = state.items.filter(it => it.product.id !== newItem.product.id);
                return { ...state, items };
            }



        case "D":
            console.log("iii")
            const filteredItems = state.items.filter(item => item.product.id !== action.productId);
            return { ...state, items: filteredItems };





        case UPDATE_CART_ITEM_QUANTITY:
            const newQuantity = action.quantity;
            const productToUpdate = action.product;

            if (newQuantity === 0) {
                const itemsAfterDeletion = state.items.filter(item => item.product.id !== productToUpdate.id);
                return { ...state, items: itemsAfterDeletion };
            } else {
                const index = state.items.findIndex(item => item.product.id === productToUpdate.id);
                if (index !== -1) {
                    const updatedItems = [...state.items];
                    updatedItems[index] = { ...state.items[index], quantity: newQuantity };
                    return { ...state, items: updatedItems };
                } else {
                    // This scenario should not occur ideally.
                    return state;
                }
            }

        case DELETE_CART_ITEM_QUANTITY:
            const productIdToDelete = action.productId;
            console.log("called")
            const updatedItems = state.items.map(item => {
                if (item.product.id === productIdToDelete) {
                    const updatedItem = { ...item };
                    if (updatedItem.quantity > 1) {
                        updatedItem.quantity -= 1;
                    } else {
                        // If quantity becomes 0, don't include the item in the updated items array
                        return null;
                    }
                    return updatedItem;
                }
                return item;
            }).filter(Boolean); // Filter out null values (items with quantity 0)
            return { ...state, items: updatedItems };

        default:
            return state;
    }
};
