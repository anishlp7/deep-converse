import React from "react";
import "../styles/header.scss";
import { HiRefresh } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = ({ isInitialPage, onHandleClick, onHandleBackBtn }) => {
  return (
    <header className="dc-header-container">
      {isInitialPage ? (
        <img
          src={require("../assets/logo.png")}
          alt="Company Logo"
          height={30}
        />
      ) : (
        <button className="dc-header-btn-style" onClick={onHandleBackBtn}>
          <AiOutlineArrowLeft />
          <span className="db-header-refresh-btn-text-style"> Back</span>
        </button>
      )}

      <button className="dc-header-btn-style" onClick={onHandleClick}>
        <HiRefresh />
        <span className="db-header-refresh-btn-text-style"> Start Over</span>
      </button>
    </header>
  );
};

export default Header;
