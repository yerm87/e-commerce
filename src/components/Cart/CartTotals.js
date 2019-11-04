import React from "react";

const CartTotals = (props) => {
    const { cartSubtotal, cartTax, cartTotal, clearList } = props.params;
    return (
        <div className="cart-totals">
            <button className="clear-button"
                    onClick={() => clearList()}>
                clear cart
            </button>
            <div className="cart-totals-params">
                <p>subtotal: ${cartSubtotal}</p>
                <p>tax: ${cartTax}</p>
                <p>total: ${cartTotal}</p>
            </div>
        </div>
    )
}

export default CartTotals;