import React, { useState } from 'react';
import './home.css';
import blouse from '../images/girl.jpg';
import tshirt from '../images/jeans.jpg';
import jeans from '../images/person.jpg';
import sweatshirt from '../images/young.jpg';
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
                <img src={blouse} alt="" />
                <h3>Colorfull Blouse</h3>
                <h3>$25,00</h3>
                <a onClick={props.addBasket} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={tshirt} alt="" />
                <h3>White Tshirt</h3>
                <h3>$15,00</h3>
                <a onClick={props.addBasket} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={jeans} alt="" />
                <h3>Blue Jeans</h3>
                <h3>$10,00</h3>
                <a onClick={props.addBasket} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={sweatshirt} alt="" />
                <h3>Fair Sweatshirt</h3>
                <h3>$25,00</h3>
                <a onClick={props.addBasket} className="addToCart cart4" href="#">Add to Cart</a>
            </div>

        </div>
    )
}
export default connect(null, { addBasket })(Home);
