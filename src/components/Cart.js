import React, { Fragment } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import colorfullBlouse from '../images/girl.jpg';
import whiteTshirt from '../images/jeans.jpg';
import blueJeans from '../images/person.jpg';
import fairSweatshirt from '../images/young.jpg';


function Cart({ basketProps, productQuantity, clearProduct }) {
    //zeby było krócej niz pisac potem props.productQuantity

    console.log("Propsyy")
    console.log(basketProps)
    let productsInCart = [];
    Object.keys(basketProps.products).forEach(function (item) {

        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
    })
    const productImages = [colorfullBlouse, whiteTshirt, blueJeans, fairSweatshirt]
    productsInCart = productsInCart.map((product, index) => {
        return (
            <Fragment key={index}>

                <div className="product">
                    <ion-icon onClick={() => clearProduct(product.name)} name="close-circle"></ion-icon>
                    <img src={productImages[product.index]} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.name)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                    <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.name)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    })
    return (
        <div>
            <div className="container-products">
                <div className="product-header">
                    <h5 className="product-title">PRODUCT</h5>
                    <h5 className="price sm-hide">PRICE</h5>
                    <h5 className="quantity">QUANTITY</h5>
                    <h5 className="total">TOTAL</h5>
                </div>
                <div className="products">
                    {productsInCart}
                </div>
                <div className="basketTotalContainer">
                    <h4 className="basketTotalTitle">Basket Total</h4>
                    <h4 className="basketTotal">{basketProps.cartCost},00</h4>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
