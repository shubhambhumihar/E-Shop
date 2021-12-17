import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter2021/P4/Crackerofadeal/D31289087_Jup_GraborGonedeals_Property_1242x450_Gif.gif"
          alt=""
        />
        <div>
          <h2 className="checkout__title">
            Hey! {user?.email} ,your current shopping Basket has {basket.length}{" "}
            items. 🔥
          </h2>
          {basket.map((item) => (
            <FlipMove>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </FlipMove>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
