import React, { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  //setting the quantity buttons
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="container">
      <div className="hero-cart">
        {CART?.map((cartItem, cartIndex) => {
          return (
            <div>
              <img src={cartItem.image} alt="" width={40} />
              <span>{cartItem.title}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity > 0 ? item.quantity -1 : 0}
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartIndex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
              <span> ${cartItem.price * cartItem.quantity}</span>
            </div>
          );
        })}

        <p>
          {" "}
          Total : $
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </p>
      </div>
    </div>
  );
}

export default CartList;
