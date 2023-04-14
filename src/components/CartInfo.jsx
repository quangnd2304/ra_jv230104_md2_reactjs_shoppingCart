import React from 'react';
import { useSelector } from 'react-redux';

export default function CartInfo() {
    let cart = useSelector(state => state.cart);
    const calTotalAmount = (listCart) => {
        let totalAmount = 0;
        listCart.forEach(item => {
            totalAmount += item.product.price * item.quantity;
        });
        return totalAmount;
    }
    let elementInfo = "";
    if (cart.length == 0) {
        elementInfo = <tr>
            <th colSpan={6}>Empty product in your cart</th>
        </tr>
    } else {
        elementInfo = <tr>
            <td colSpan={4}>
                There are <b>{cart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
                {calTotalAmount(cart)} USD
            </td>
        </tr>
    }
    return (
        <tfoot id="my-cart-footer">
            {/* CART FOOTER */}
            {elementInfo}

        </tfoot>
    )
}
