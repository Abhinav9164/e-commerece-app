import React from "react";
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from  "./Subtotal.js";
import CurrencyFormat from "react-currency-format";



function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">


    {basket?.length === 0 ? (
       <div>
         <h2>Your shopping basket is Empty</h2>
         <p>
           Please go add some of the products by adding it your cart
         </p>
       </div>
     ) : (
       <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
              {basket?.map((item) => (

          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />

      ))}
       </div>

    )}
    {basket.length > 0 && (
      <div className="checkout_right">
        <Subtotal />


      </div>

    )}
  </div>
);
}

export default Checkout;
