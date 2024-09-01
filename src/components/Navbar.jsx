import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Md10K, MdOutlineShoppingBag } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa6";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <nav>
        <div className="first-part">
          <div className="left-box">
            <div className="luxury">Luxury</div>
            <div className="essentials">Essentials</div>
           
          </div>
          
          <div className="resp">
          <div className="menu">
              {" "}
              <button onClick={() => setMenu(!menu)}>
                <FaAlignLeft />
              </button>
            </div>
            <div className="resp-logo">
          <div className="logo">
            <img
              src="https://th.bing.com/th?id=OIP.v7FgAUFkihYRi-4Luz3CCwHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="logo"
            />
          </div>

          <div className="react-icons">
            <CiSearch />
            <FaUserAlt />
            <CiDeliveryTruck />
            <MdOutlineShoppingBag />
          </div>
        </div>
        </div> 
        </div>
        <div className={menu ? "open" : ""}>
          <div className="second-part">
            <ul>
              <li>
                <NavLink to={"/newin"}>New in</NavLink>
              </li>
              <li>
                <NavLink to={"/unstitch"}>Unstitched luxury</NavLink>
              </li>
              <li>
                <NavLink to={"/luxury"}>Luxury pret</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Designer Picks</NavLink>
              </li>
              <li>
                <NavLink to={"/mens"}>Mens Wear</NavLink>
              </li>
              <li>
                <NavLink to={"/kids"}>Kids</NavLink>
              </li>
              <li>
                <NavLink to={"/jwellery"}>Jwellery</NavLink>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
