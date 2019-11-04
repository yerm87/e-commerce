import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Product from "./Product";

class ProductList extends Component {
    render(){
        return (
            <React.Fragment>
                <Title name="our" title="products" />
                <div className="productList">
                    <ProductConsumer>
                        {value => {
                            return (
                                value.products.map((product, index) => { 
                                    return(
                                        <div className="productListItem" key={index}>
                                            <Product key={product.id} 
                                                     data={product}
                                                     handle={() => value.handleDetail(product.id)}
                                                     addToCart={value.addToCart}
                                                     openModal={value.openModal} />
                                        </div>
                                    )
                                })
                            )
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;