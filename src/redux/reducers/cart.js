// Mặc định giỏ hàng của khách hàng được lưu trữ trong localStorage với tên là ShoppingCart
//Cart = [{product:{product},quantity:quantity},....]
import { BUY_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../../constants/action_types";
import { SHOPPING_CART } from "../../constants/shoppingCart";
let initialState = [];
// get localStorage theo tên cart
let carts = JSON.parse(localStorage.getItem(SHOPPING_CART));
initialState = (carts == null) ? initialState : carts;
//Hàm kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
const checkExistProduct = (listCart, productId) => {
    for (let index = 0; index < listCart.length; index++) {
        if (listCart[index].product.productId == productId) {
            // Sản phẩm đã tồn tại trong giỏ hàng
            return index;
        }
    }
    // Sản phẩm chưa tồn tại trong giỏ hàng
    return -1;
}
const cart = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            // 3 trường hợp xảy ra:
            // 1. Giỏ hàng chưa có sản phẩm --> add sản phẩm vào giỏ hàng
            // 2. Giỏ hàng có sản phẩm và sản phẩm mua chưa tồn tại trong giỏ hàng--> add sản phẩm vào giỏ hàng
            // 3. Giỏ hàng có sản phẩm và sản phẩm mua đã tồn tại trong giỏ hàng--> cộng số lượng
            let index = checkExistProduct(state, action.payload.product.productId);

            if (index >= 0) {
                // sản phẩm đã tồn tại trong giỏ hàng
                state[index].quantity = Number(state[index].quantity) + Number(action.payload.quantity);
            } else {
                // sản phẩm chưa tồn tại trong giỏ hàng
                let item = { product: action.payload.product, quantity: action.payload.quantity };
                state.push(item);
            }
            // Lưu vào localStorage
            localStorage.setItem(SHOPPING_CART, JSON.stringify(state))
            return [...state];
        case UPDATE_PRODUCT:
            let indexUpdate = checkExistProduct(state, action.payload.product.productId);
            state[indexUpdate].quantity = action.payload.quantity;
            localStorage.setItem(SHOPPING_CART, JSON.stringify(state))
            return [...state];
        case DELETE_PRODUCT:
            let indexDelete = checkExistProduct(state, action.payload);
            state.splice(indexDelete, 1);
            localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
            return [...state];
        default:
            return state;
    }


}
export default cart;