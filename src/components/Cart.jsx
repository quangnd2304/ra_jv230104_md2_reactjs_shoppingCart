import React from 'react';
import Item from './Item';
import CartInfo from './CartInfo';
import Notify from './Notify';
import { useSelector } from 'react-redux';


export default function Cart() {
    let cart = useSelector(state => state.cart);
    console.log("Cart--->", cart);
    let elementItems = cart.map((item, index) => {
        return <Item key={item.product.productId} item={item} stt={index + 1} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="4%">#</th>
                                <th>Pokemon</th>
                                <th width="15%">Price</th>
                                <th width="4%">Quantity</th>
                                <th width="20%">Subtotal</th>
                                <th width="25%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="my-cart-body">
                            {/* CART BODY */}
                            {elementItems}
                        </tbody>
                        <CartInfo />
                    </table>
                </div>
            </div>
            <Notify />
        </div>
    )
}
