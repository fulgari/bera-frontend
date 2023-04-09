import React from "react";
import { Link } from "react-router-dom";
import styles from "./Basic.module.css";
import beraLogo from "../../assets/bera.jpg";

type BasicLayoutProps = {
  children?: any;
};
export default function (props: BasicLayoutProps) {
  const { children } = props;
  return (
    <div className={styles.client}>
      <div className={styles.notch}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={beraLogo} alt="logo" />
          </Link>
        </div>
        {/* <nav className={styles.siderNav}>
          <div className={styles.siderNavItem}>
            <div className={styles.siderNavItemIcon}></div>
            <div className={styles.siderNavItemText}>Dashboard</div>
          </div>
          <div className={styles.siderNavItem}>
            <div className={styles.siderNavItemIcon}></div>
            <div className={styles.siderNavItemText}>My Kanbans</div>
          </div>
          <div className={styles.siderNavItem}>
            <div className={styles.siderNavItemIcon}></div>
            <div className={styles.siderNavItemText}>Goals</div>
          </div>
        </nav> */}
      </div>
      <div className={styles.mainWrap}>
        {/* <nav className={styles.nav}>
          <Link to="/">Bera</Link>
          <Link to="/home">Home</Link>
          <Link to="/kanban">Kanban</Link>
        </nav> */}
        {children}
      </div>
    </div>
  );
}
