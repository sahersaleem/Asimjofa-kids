import React from "react";
import {Cards} from "./index";
// const Cards = ({imgUrl, text}) => {
//   return (
//     <div>
//       <div className="card">
//         <div className="img">
//           <img src={imgUrl} alt={text} />
//         </div>
//         <div className="card-text"><a href="/">{text}</a></div>
//       </div>
//     </div>
//   );
// };

const Smallcards = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-main-text">
          Whats New!
        </div>
      <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/whats_new_200_x_200.jpg?v=1721718420&width=200"
        text="Chamkeeli"
      />
       <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/jagmag.jpg?v=1722597613&width=400"
        text="Jag Mag"
      />
       <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/asim-jofa-kids-200_x_200.jpg?v=1720186812&width=400"
        text="Asim Jofa Kids"
      />
       <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/collection_8fb13181-175b-495d-82ff-d25e6454815d.jpg?v=1718012807&width=400"
        text="Uraan"
      />
       <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/New_43f413c7-3de0-4f81-863c-5e5f23f10dbd.jpg?v=1719575138&width=400"
        text="Pyaar Diyan Gallan"
      />
      <Cards
        imgUrl="https://asimjofa.com/cdn/shop/files/what_s_new.jpg?v=1719907256&width=400"
        text="Afsanay - Luxury Pret"
      />
     </div>
    </div>
  );
};

export default Smallcards;
