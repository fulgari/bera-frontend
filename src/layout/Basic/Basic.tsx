import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Basic.module.css";
import beraLogo from "../../assets/bera.jpg";
import cx from 'classnames';

type BasicLayoutProps = {
  children?: any;
};
export default function (props: BasicLayoutProps) {
  const { children } = props;
  const [isEnlarged, setIsEnlarged] = useState(false)
  return (
    <div className={s.client}>
      <div className={cx(s.notch, {
        [s.isEnlarged]: isEnlarged
      })}
        onMouseEnter={() => { setIsEnlarged(true) }}
        onMouseLeave={() => { setIsEnlarged(false) }}>
        {!isEnlarged && <div className={s.logo}>
          <Link to="/">
            <img src={beraLogo} alt="logo" />
          </Link>
        </div>
        }
        {/* <nav className={s.siderNav}>
          <div className={s.siderNavItem}>
            <div className={s.siderNavItemIcon}></div>
            <div className={s.siderNavItemText}>Dashboard</div>
          </div>
          <div className={s.siderNavItem}>
            <div className={s.siderNavItemIcon}></div>
            <div className={s.siderNavItemText}>My Kanbans</div>
          </div>
          <div className={s.siderNavItem}>
            <div className={s.siderNavItemIcon}></div>
            <div className={s.siderNavItemText}>Goals</div>
          </div>
        </nav> */}
      </div>
      <div className={s.mainWrap}>
        {/* <nav className={s.nav}>
          <Link to="/">Bera</Link>
          <Link to="/home">Home</Link>
          <Link to="/kanban">Kanban</Link>
        </nav> */}
        {children}
      </div>
    </div>
  );
}
