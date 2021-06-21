/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { PAGE_PATH } from "../../constant/enum";
import logo from "../../assets/images/logo.png";
import search_icon from "../../assets/images/search.svg";
import account_icon from "../../assets/images/user.png";
import login_icon from "../../assets/images/sign-in-alt.svg";
import register_icon from "../../assets/images/arrow-circle-right.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="outer">
          <Link to={`${PAGE_PATH.HOME}`}>
            <img src={logo} alt="" />
          </Link>
          <ul className="menu">
            <li className="menu__item">
              <Link className="menu__link" to={PAGE_PATH.HOME}>
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={PAGE_PATH.MOVIES}>
                Movies
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={PAGE_PATH.TV_SHOWS}>
                TV Show
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={PAGE_PATH.VIDEOS}>
                Videos
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link" to={PAGE_PATH.BLOGS}>
                Blogs
              </Link>
            </li>
            <li className="menu__item">
              <Link className="menu__link">Pages</Link>
              <ul className="menu__sub">
                <li className="menu__item">
                  <Link className="menu__link" to={PAGE_PATH.ABOUT_US}>
                    About us
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to={PAGE_PATH.CONTACT}>
                    Contact
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to={PAGE_PATH.FAQ}>
                    FAQ
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to={PAGE_PATH.PRIVACY_POLICY}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link">Pricing Plan</Link>
                  <ul className="menu__sub">
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        to={PAGE_PATH.PRICING_PLAN_1}
                      >
                        Pricing Plan 1
                      </Link>
                    </li>
                    <li className="menu__item">
                      <Link
                        className="menu__link"
                        to={PAGE_PATH.PRICING_PLAN_2}
                      >
                        Pricing Plan 2
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navigator">
            <div className="search">
              <div className="search-icon">
                <img src={search_icon} alt="search-icon" />
              </div>
              <div className="search__input">
                <input type="text" name="searchText" id="" />
              </div>
            </div>
            <div className="account">
              <img src={account_icon} alt="" />
              <ul className="account-wrapper">
                <li className="account-item">
                  <Link to={PAGE_PATH.LOGIN_IN}>
                    <i>
                      <img src={login_icon} alt="" />
                    </i>
                    Login
                  </Link>
                  <Link to={PAGE_PATH.LOG_OUT}>
                    <i>
                      <img src={register_icon} alt="" />
                    </i>
                    register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
// Header.propTypes = {};

export default Header;
