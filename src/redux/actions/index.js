import * as actionTypes from "../../constants/action_types"
export const act_buy_product = (product, quantity) => {
    return {
        type: actionTypes.BUY_PRODUCT,
        payload: { product, quantity }
    }
}
export const act_change_notify = (message) => {
    return {
        type: actionTypes.CHANGE_NOTIFY,
        payload: message
    }
}
export const act_update_product = (product, quantity) => {
    return {
        type: actionTypes.UPDATE_PRODUCT,
        payload: { product, quantity }
    }
}
export const act_delete_product = (productId) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: productId
    }
}
export const act_update_product_quantity = (product, quantityBuy) => {
    return {
        type: actionTypes.UPDATE_PRODUCT_QUANTITY,
        payload: { product, quantityBuy }
    }
}