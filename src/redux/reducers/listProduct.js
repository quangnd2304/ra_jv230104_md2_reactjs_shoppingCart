import { UPDATE_PRODUCT_QUANTITY } from "../../constants/action_types";

const initialState = [
    { productId: 'P001', productName: 'Pizza', descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 12, quantity: 10, imageLink: 'images/pizza.jpg' },
    { productId: 'P002', productName: 'Hamburger', descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 14, quantity: 0, imageLink: 'images/Hamburger.jpg' },
    { productId: 'P003', productName: 'Bread', descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 10, quantity: 5, imageLink: 'images/bread.jpg' },
    { productId: 'P004', productName: 'Cake', descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!', price: 8, quantity: 18, imageLink: 'images/Cake.jpg' }
]
const checkExistProduct = (list, productId) => {
    for (let index = 0; index < list.length; index++) {
        if (list[index].productId == productId) {
            return index;
        }
    }
    return -1;
}
const listProduct = (state = initialState, action) => {
    console.log("LIST PRODUCT---->", state);
    switch (action.type) {
        case UPDATE_PRODUCT_QUANTITY:
            // thực hiện trừ quantity của product
            console.log("PAYLOAD--->", action.payload);
            console.log("ProductId--->", action.payload.product.productId);
            let indexUpdate = checkExistProduct(state, action.payload.product.productId);
            state[indexUpdate].quantity = Number(state[indexUpdate].quantity) - Number(action.payload.quantityBuy);

            return [...state];
        default:
            return state;
    }
}
export default listProduct;