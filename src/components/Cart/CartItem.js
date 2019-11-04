import React, { useEffect } from "react";

const CartItem = (props) => {
    useEffect(() => {
        setTotals();
    }, [])
    const {id, title, img, price, count, total} = props.item;
    const { increment, decrement, removeItem, calcTotals, setTotals } = props.methods; 
    return (
        <div className="cartItem-container">
            <div>
                <img src={img} />
            </div>
            <div>
                {title}
            </div>
            <div className="cartItem-price">
                ${price}
            </div>
            <div className="cartItem-quantity">
                <div className="cartItem-quantity-1" onClick={() => {
                                                                 decrement(id);
                                                                 calcTotals();
                                                              }}>-</div>
                <div className="cartItem-quantity-2">{count}</div>
                <div className="cartItem-quantity-2" onClick={() => {
                                                                  increment(id);
                                                                  calcTotals();
                                                              }}>+</div>
            </div>
            <div onClick={() => removeItem(id)}>
                <i className="far fa-trash-alt remove" />
            </div>
            <div>
                Item Total: ${total}
            </div>
        </div>
    )
}

export default CartItem;