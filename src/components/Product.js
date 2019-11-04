import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Product = (props) => {
    const{id, title, img, price, inCart} = props.data;

    return (
        <React.Fragment>
            <div className="cart-item" 
                 style={{margin: "50px 60px 0 60px"}}>
                <Link to="/details">
                    <img src={img} 
                         style={{width: "100%", height: "100%"}}
                         onClick={props.handle} />
                </Link>
            </div>
            <button className="cart-btn" 
                    disabled={inCart ? true : false}
                    onClick={() => {
                        props.addToCart(id);
                        props.openModal(id);
                    }}>
                {inCart ? <p style={{margin: "0"}}>In Cart</p> : <i className="fas fa-cart-plus" />}
            </button>
            <div className="footerElement">
                <p>{title}</p>
                <p>${price}</p>
            </div>
        </React.Fragment>
    )
}

Product.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    })
}

export default Product;