import React, { Component } from "react";
import Title from "../Title";
import EmptyCart from "../Cart/EmptyCart";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
    return(
        <ProductConsumer>
            {value => {
                if(value.cart.length === 0){
                    return <EmptyCart />
                } else {
                    return (
                        <React.Fragment>
                            <Title name="your" title="cart" />
                            <CartColumns />
                            <CartList items={value} value={value} />
                            <CartTotals params={value} />
                        </React.Fragment>
                    )
                }
            }}
        </ProductConsumer>
    )
}

export default Cart;