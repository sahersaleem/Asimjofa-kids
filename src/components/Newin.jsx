import React from "react";
import { Cards } from "./index";
import { Chamkeeli } from "./index";
const NewIn = () => {
  return (
    <div className="other-pages">
    <div className="card-container">
      <div className="card-main-text">New in</div>
      
        <Cards
          imgUrl={
            "https://asimjofa.com/cdn/shop/files/New_in_48238cfa-38f9-4de9-b29d-f5a844da47d0.jpg?v=1717849358&width=200"
            
          }
          text="Chamkeeli"
        />
        <Cards
          imgUrl={
            "https://asimjofa.com/cdn/shop/files/Chamkeli_6bc97953-bf7a-481a-a63c-c6d25372d237.jpg?v=1724836592&width=200"
          }
          text="Chamkeeli"
        />
      
      
      </div>
      
      <Chamkeeli/>
    </div>
  );
};

export default NewIn;
