import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { getImageURL } from "../../utils/functions";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={getImageURL("logo.jpeg")} style={{ width: 60 }} alt="" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navListItem}>
            <NavLink className={({ isActive }) => (isActive ? "activeNavLink" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              to="/group/mammals"
            >
              Mammals
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              to="/group/reptiles"
            >
              Reptile
            </NavLink>
          </li>
          <li className={styles.navListItem}>
            <NavLink
              className={({ isActive }) => (isActive ? "activeNavLink" : "")}
              to="/group/birds"
            >
              Birds
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
