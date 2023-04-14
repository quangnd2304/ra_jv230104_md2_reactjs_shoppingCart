import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_change_notify, act_delete_product, act_update_product } from '../redux/actions';
import { UPDATE_PRODUCT } from '../constants/action_types';
import { NOTIFY_DELETE_SUCCESS, NOTIFY_UPDATE_SUCCESS } from '../constants/notify_contents';

export default function Item(props) {
    let { item, stt } = props;
    const [quantity, setQuantity] = useState(0);
    let quantityBuy = (quantity == 0) ? item.quantity : quantity;
    const dispatch = useDispatch();
    const handleUpdate = () => {
        dispatch(act_update_product(item.product, quantity));
        dispatch(act_change_notify(NOTIFY_UPDATE_SUCCESS));
    }
    const handleDelete = () => {
        dispatch(act_delete_product(item.product.productId));
        dispatch(act_change_notify(NOTIFY_DELETE_SUCCESS));
    }
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{item.product.productName}</td>
            <td>{item.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={quantityBuy}
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong>{item.product.price * item.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleUpdate}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleDelete}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
