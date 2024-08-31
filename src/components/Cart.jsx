import React from "react";

const Cart = ({ imgUrl1 ,imgUrl2}) => {
  return (
    <div className="cart-div">
      <div className="cart-image">
        <img className="img1" src={imgUrl1} alt="img" />
        <img className="img2" src={imgUrl2} alt="img" />
      </div>
      <div className="cart-content">
        <div className="cart-text"><p className="bold">AJK 18-Embroiderd</p>
        <p className="bold">Chiffon 3pcs</p>
        <p className="price">6650</p></div>
        <div className="btn"><button>Add to Cart</button></div>
        
      </div>
    </div>
  );
};

export default Cart;
