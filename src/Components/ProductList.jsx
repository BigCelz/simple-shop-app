import React from "react";
import "../App.css";
import Badge from "react-bootstrap/Badge";


function ProductList({ product, addToCart }) {
  return (
    <div className="flex container mb-5 hero" >
      {product.map((productItem, productIndex) => {
        return (
          <div className="product-item m-2 m-auto  mb-2" key={productIndex} style={{ width: "45%" }}>
            <img
              src={productItem.image}
              alt=""
              width="80%"
              height="300px"
              style={{ objectFit: "contain" }}
            />
            <p className="mt-2">
              <span className="fw-bolder">{productItem.title}</span> |{" "}
              <Badge className="bg-danger">{productItem.category}</Badge>
            </p>
            <p className="price">${productItem.price.toFixed(2)}</p>
            <button onClick={() => addToCart(productItem)} className="btn btn-primary">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
