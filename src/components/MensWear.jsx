import React from "react";
import Cards from "./Cards";
import {Cart} from "./index";

const MensWear = () => {
  return (
    <div className="kids">
    <div className="cart-container">
       <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/268A9983_f95169dc-11bc-4dde-b5f7-1ac33fed57eb.jpg?v=1717841505&width=600"
        }
        imgUrl2={'https://asimjofa.com/cdn/shop/files/268A0018_fe9cd53d-bf8e-460d-9b1e-6d05ff3efc3f.jpg?v=1717841505&width=600'}
      />

      <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/268A0595_ed657c18-363c-4185-a998-7f3e614bb7a0.jpg?v=1717841585&width=600"
        }
        imgUrl2={
          "https://asimjofa.com/cdn/shop/files/268A0631_58d1075b-a68f-4d79-ae16-8c58f4587287.jpg?v=1717841585&width=600"
        }
      />
      <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/5_f8057ec3-4e24-4ee0-a9e6-bcd2390d94dc.jpg?v=1718102913&width=600"
        }
        imgUrl2={
          "https://asimjofa.com/cdn/shop/files/4_296b665e-8242-40e6-918b-e8aba76af7ad.jpg?v=1718102913&width=600"
        }
      />
      <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/268A0372.jpg?v=1717840867&width=600"
        }
        imgUrl2={
          "https://asimjofa.com/cdn/shop/files/268A0351.jpg?v=1717840867&width=600"
        }
      />
    </div>
    </div>
  );
};

export default MensWear;
