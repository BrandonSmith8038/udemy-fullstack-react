import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.css";
import { CURRENT_YEAR } from "../../config";

function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png" />
      </Link>
      <div className={styles.right}>
        @NBA {CURRENT_YEAR} All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
