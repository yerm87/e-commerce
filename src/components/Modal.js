import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
    return (
        <ProductConsumer>
            {value => {
                const {closeModal, modalOpen} = value
                const {img, title, price} = value.modalItem;

                if(!modalOpen){
                    return null;
                } else {

                return (
                    <ModalContainer>
                        <div className="modal-window">
                            <p>Item Added To Cart</p>
                            <div className="modal-image">
                               <img src={img} alt="image" />
                            </div>
                            <h5>{title}</h5>
                            <h5 className="modal-price">Price : ${price}</h5>
                            <Link to="/">
                                <ButtonContainer onClick={() => closeModal()}>
                                    Continue Shopping
                                </ButtonContainer>
                            </Link>
                            <br />
                            <div style={{height: "1rem"}}></div>
                            <Link to="/cart">
                                <ButtonContainer cart
                                                 onClick={() => closeModal()}>
                                    Go To Cart
                                </ButtonContainer>
                            </Link>
                        </div>
                    </ModalContainer>
                )
                }
            }}
        </ProductConsumer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    .modal-window {
        background-color: white;
        width: 30%
        margin: 10% auto;
        text-align: center;
        padding-bottom: 1rem;
    }
    .modal-window p {
        font-weight: bold;
        margin-bottom: 0;
        padding-top: 1.5rem;
        font-size: 1.1rem;
    }
    .modal-image {
        width: 80%;
        margin: 0 auto;
        padding-left: 3rem;
    }
    .modal-image img {
        width: 100%;
        height: 100%;
    }
    .modal-price {
        color: gray;
        margin-bottom: 0.8rem;
    }
`

export default Modal;