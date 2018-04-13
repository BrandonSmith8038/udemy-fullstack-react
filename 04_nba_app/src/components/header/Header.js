import React from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import style from "./header.css";

function Header() {
  const logo = () => {
    return (
      <Link to="/" className={style.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
    );
  };

  const navBars = () => (
    <div className="style.bars">
      <FontAwesome
        name="bars"
        style={{
          color: "#dfdfdf",
          padding: "10px",
          cursor: "pointer"
        }}
      />
    </div>
  );

  return (
    <div>
      <header className={style.header}>
        <div className={style.headeropt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    </div>
  );
}

export default Header;
