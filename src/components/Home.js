import React, { useState } from 'react';
import './home.css';
import colorfullBlouse from '../images/girl.jpg';
import whiteTshirt from '../images/jeans.jpg';
import blueJeans from '../images/person.jpg';
import fairSweatshirt from '../images/young.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Home = (props) => {
    console.log(props)
    const [basketNumbers, setBasketNumbers] = useState(0);

    const addToBasket = () => {
        setBasketNumbers(basketNumbers + 1)
    }
    return (
        <div className="container">
            <div className="image">
                <img src={colorfullBlouse} alt="" />
                <h3>Colorfull Blouse</h3>
                <h3>$25,00</h3>
                <a onClick={() => props.addBasket('colorfullBlouse')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={whiteTshirt} alt="" />
                <h3>White Tshirt</h3>
                <h3>$15,00</h3>
                <a onClick={() => props.addBasket('whiteTshirt')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={blueJeans} alt="" />
                <h3>Blue Jeans</h3>
                <h3>$10,00</h3>
                <a onClick={() => props.addBasket('blueJeans')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={fairSweatshirt} alt="" />
                <h3>Fair Sweatshirt</h3>
                <h3>$25,00</h3>
                <a onClick={() => props.addBasket('fairSweatshirt')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>

        </div>
    )
}
export default connect(null, { addBasket })(Home);
