import React from "react";
import { Cards, Luxury } from "./index";
const UnstitchedLuxury = () => {
  return (
    <div className="other-pages">
      <div className="card-container">
        <div className="card-main-text">Unstitched Luxury</div>
        
          <Cards
            imgUrl={
              "https://asimjofa.com/cdn/shop/files/Unstitched_4c207bf2-399c-4eb4-a93d-a5e8f6fd9690.jpg?v=1694431378&width=400"
            }
          />
          <Cards
            imgUrl={
              "https://asimjofa.com/cdn/shop/files/MG_9547.jpg?v=1692880966&width=400"
            }
          />
          <Cards
            imgUrl={
              "https://asimjofa.com/cdn/shop/files/thumbnail_1_d6c7a0a9-10cb-47a0-a3d2-6add5b5200df.jpg?v=1689934591&width=400"
            }
          />
          <Cards
            imgUrl={
              "https://asimjofa.com/cdn/shop/files/051A5826.jpg?v=1691411042&width=400"
            }
          />

        
      </div>
      <Luxury/>
    </div>
  );
};

export default UnstitchedLuxury;
