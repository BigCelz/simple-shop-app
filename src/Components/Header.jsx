import React from "react";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <div className="flex shopping-card fixed-top">
      <div onClick={() => props.handleShow(false)} className="brand">
        My Shop
      </div>

      <div onClick={() => props.handleShow(true)}>
        <FaShoppingCart fontSize={20} />
        <sup style={{ fontSize: "15px" }}> {props.count} </sup>
      </div>
    </div>
  );
}

export default Header;
