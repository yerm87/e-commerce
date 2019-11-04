import React, { Component } from "react";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";

class Details extends Component {
    render(){
        return (
            <ProductConsumer>
                {value => {
                    const {id, img, inCart, info, price, title, company} = value.details
                    return (
                        <div className="details">
                            <h1>{title}</h1>
                            <div className="details-container">
                                <img src={img} />
                                <div className="details-description">
                                    <h1>Model: {title}</h1>
                                    <h2>Made by: {company}</h2>
                                    <h3>Price: ${price}</h3>
                                    <p><strong>Some Info About Product</strong></p>
                                    <p>{info}</p>
                                    <div className="details-buttons">
                                        <Link to="/">
                                            <ButtonContainer>back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart 
                                                         style={{marginLeft: "0.9rem"}}
                                                         disabled={inCart ? true : false}
                                                         onClick={() => value.addToCart(id)}>
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;