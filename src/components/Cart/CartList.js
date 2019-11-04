import React from "react";
import CartItem from "./CartItem";

const CartList = (props) => {
    const { cart } = props.items;

    return (
        <React.Fragment>
            {cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} methods={props.value} />
                )
            })}
        </React.Fragment>
    )
}

export default CartList;