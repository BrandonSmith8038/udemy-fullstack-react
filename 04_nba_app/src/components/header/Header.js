import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import style from "./header.css";

function Header(props) {
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
        onClick={props.onOpenNav}
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
        .
        <SideNav {...props} />
        <div className={style.headeropt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    </div>
  );
}

export default Header;
