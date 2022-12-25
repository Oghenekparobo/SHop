import React from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import usericon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NAV_LINK = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="nav__logo">
              <img src={logo} alt="logo" />
              <div className="">
                <h1>SHop</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {NAV_LINK.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <div className="badge">1</div>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <div className="badge">1</div>
              </span>

              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={usericon}
                  alt="user-icon"
                />
              </span>
            </div>

            <div className="mobile-menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
