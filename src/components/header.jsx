import { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import logo from "../assets/info/ (4).png";

const Header = () => {
  const [MenuState, setMenuState] = useState("hide");

  return (
    <>
      <div className="navBar">
        <Link to="/">
          <div className="brand">
            <img src={logo} alt="Company Logo" />
            <h1>الـنـصـر للسيــارات</h1>
          </div>
        </Link>
        <div className="btn">
          <button onClick={() => {setMenuState("vis")}}>
            <IoIosMenu />
          </button>
        </div>
      </div>
      <div className={`menu ${MenuState}`}>
        <div>
          <Link to="/">الرئيسية</Link>
          <Link to="/story">قصتنا</Link>
          <Link to="/products">منتاجتنا</Link>
          <Link to="/gallery">معرض الصور</Link>
        </div>
        <div>
          <button onClick={() => {setMenuState("hide")}}>
            <IoCloseOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
