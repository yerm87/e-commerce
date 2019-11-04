import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

class Navbar extends Component {
    render(){
        return (
            <NavigationBar className="navigation">
                <div className="nav-item">
                    <Link to="/">
                       <img src={logo} alt="logo" />
                    </Link>
                    <Link className="products" to="/">
                        products
                    </Link>
                </div>
                <div className="cart-logo">
                    <Link to="/cart">
                        <ButtonContainer>
                          <span className="icon">
                            <i className="fas fa-cart-plus" />
                          </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </div>
            </NavigationBar>
        )
    }
}

const NavigationBar = styled.nav`
    background: var(--mainBlue);
    text-transform: capitalize;
    font-size: 1.3rem;
`

export default Navbar;