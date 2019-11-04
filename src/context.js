import React, { Component } from "react";
import {storeProducts, detailProduct} from "./data";
import client from "./Contentful";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        details: detailProduct,
        cart: [],
        modalOpen: false,
        modalItem: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getItem = (id) => {
        const product = this.state.products.find(product => product.id === id);
        return product;
    }

    handleDetail = (id) => {
        const item = this.getItem(id);
        this.setState({
            details: item
        })
    }

    setProducts = async () => {
        let productsArray = [];
        await client.getEntries({
            content_type: "onlineStoreItem"
        }).then(product => {
            const items = product.items;
            items.forEach(item => {
                const value = item.fields;
                let image = item.fields.img.fields;
                const { title } = image;
                const modifiedItem = {
                    ...value,
                    img: "img/"+title+".png"
                }
                productsArray.push(modifiedItem);
            })
        })
        //storeProducts.forEach(element => {
        //    const singleItem = {...element};
        //    productsArray = [...productsArray, singleItem];
        //})
        //console.log(productsArray);
        this.setState(() => {
            return {
                products: productsArray
            }
        })
    }

    addToCart = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const item = tempProducts[index];
        item.inCart = true;
        item.count = 1;
        const price = item.price;
        item.total = price;
        this.setState({
            products: tempProducts,
            cart: [...this.state.cart, item]
        }, () => console.log(this.state))
    }

    openModal = (id) => {
        const item = this.getItem(id);
        this.setState(prevState => {
            return {
                modalOpen: !prevState.modalOpen,
                modalItem: item
            }
        }, () => {console.log(this.state)})
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    increment = (id) => {
        const copyCart = [...this.state.cart];
        const index = copyCart.indexOf(this.getItem(id));
        let item = copyCart[index];
        item.count = item.count + 1;
        item.total = item.price * item.count;
        this.setState({
            cart: copyCart
        })
    }

    decrement = (id) => {
        const copyCart = [...this.state.cart];
        const index = copyCart.indexOf(this.getItem(id));
        let item = copyCart[index];
        if(item.count === 1){
            item.count = 1;
        } else {
            item.count = item.count - 1;
        }
        item.total = item.price * item.count;
        this.setState({
            cart: copyCart
        })
    }

    removeItem = (id) => {
        const copyCart = [...this.state.cart];
        const index = copyCart.indexOf(this.getItem(id));
        const item = copyCart[index];
        item.inCart = false;
        copyCart.splice(index, 1);
        this.setState({
            cart: copyCart
        }, () => this.setTotals());     
    }

    clearList = () => {
        const copyCart = [...this.state.cart];
        copyCart.forEach(item => {
            item.inCart = false;
        })

        this.setState({
            cart: [] 
        })
    }

    setTotals = () => {
        const copyCart = [...this.state.cart];
        let counter = 0;
        copyCart.forEach(item => {
            counter = item.total + counter; 
        })
        const tax = counter*11/100;
        const total = counter + tax;

        this.setState({
            cartSubtotal: counter,
            cartTax: tax,
            cartTotal: total
        })
    }

    calcTotals = () => {
        const copyCart = [...this.state.cart];
        const totalsArray = copyCart.map(item => item.total);
        const subtotal = totalsArray.reduce((item1, item2) => {
            return item1+item2;
        });
        const tax = subtotal*11/100;
        const total = subtotal + tax;

        this.setState({
            cartSubtotal: subtotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    componentDidMount(){
        this.setProducts();
    }

    render(){
        return (
            <ProductContext.Provider value={{...this.state,
                                            addToCart: this.addToCart,
                                            handleDetail: this.handleDetail,
                                            openModal: this.openModal,
                                            closeModal: this.closeModal,
                                            increment: this.increment,
                                            decrement: this.decrement,
                                            removeItem: this.removeItem,
                                            clearList: this.clearList,
                                            calcTotals: this.calcTotals,
                                            setTotals: this.setTotals}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};