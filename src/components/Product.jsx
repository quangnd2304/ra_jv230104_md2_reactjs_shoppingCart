import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_buy_product, act_change_notify, act_update_product_quantity } from '../redux/actions';
import { NOTIFY_BUY_SUCCESS } from '../constants/notify_contents';

export default function Product(props) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    let { product } = props;
    let elementBuy = "";
    const handleBuy = () => {
        // dispatch action có tên act_buy_product
        dispatch(act_buy_product(product, quantity));
        //dispatch action có tên act_update_product_quantity
        dispatch(act_update_product_quantity(product, quantity));
        // Mua thành công phải đổi thông báo
        dispatch(act_change_notify(NOTIFY_BUY_SUCCESS));
    }
    if (product.quantity > 0) {
        elementBuy = <div>
            <input
                name="quantity-product-1"
                type="number"
                defaultValue={1}
                min={1}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <a data-product={1} href="#" className="price" onClick={handleBuy}>
                {" "}
                {product.price} USD{" "}
            </a>
        </div>
    } else {
        elementBuy = <span className="price"> {product.price} USD</span>
    }
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.imageLink}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.productName}</h4>
                <p>
                    {product.descriptions}
                </p>
                {elementBuy}
            </div>
        </div>
    )
}
