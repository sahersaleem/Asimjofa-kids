import React from "react";
import Cart from "./Cart";

const Luxury = () => {
  return (
    
    <div className='cart-container'>
      <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/MG_0513.jpg?v=1719837908&width=600"
        }
        imgUrl2={'https://asimjofa.com/cdn/shop/files/MG_0556.jpg?v=1719837917&width=600'}
      />

      <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/MG_0623.jpg?v=1719837257&width=600"
        }
        imgUrl2={'https://asimjofa.com/cdn/shop/files/MG_0644.jpg?v=1719837257&width=600'}
      />
       <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/MG_0852.jpg?v=1719837284&width=600"
        }
        imgUrl2={'https://asimjofa.com/cdn/shop/files/MG_0919.jpg?v=1719837289&width=600'}
      />
       <Cart
        imgUrl1={
          "https://asimjofa.com/cdn/shop/files/MG_0068_bec9d4f6-5220-4017-b4a8-321031a8e7d2.jpg?v=1719836859&width=600"
        }imgUrl2={'https://asimjofa.com/cdn/shop/files/MG_0126_b2b88cb9-c307-4814-9f1b-23c2bd61155d.jpg?v=1719836879&width=600'}
      />
    </div>
  );
};

export default Luxury;
