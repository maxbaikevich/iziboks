import React from "react";
import "./app-header.css";
import iziBookLogo from "./app-header-image/logo/logo_IZI__W&B_big.png";
import iziBookLogo2 from "./app-header-image/logo/iZiBOOK.png";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="wrapper">
        <nav className="app-header__logos">
          <ul className="logos-list">
            <li classNAme="logos-list__item logos-list__item-first">
              <a className="logos-list__link-1" href="">
                <img
                  className="logos-list__image"
                  src={iziBookLogo}
                  width="155"
                  height="90"
                  alt="logo"
                />
              </a>
            </li>
            <li classNAme="logos-list__item">
              <a className="logos-list__link" href="">
                <img
                  className="logos-list__image-2"
                  src={iziBookLogo2}
                  width="183"
                  height="49"
                  alt="logo"
                />
              </a>
            </li>
          </ul>
          <ul className="user-nav-list">
            <li className="user-nav-item">
              <a className="user-nav-link sity" href="#">
                Екатеринбург
              </a>
            </li>
            <li className="user-nav-item">
              <a className="user-nav-link tel" href="tel:88001234567">
                8 (800) 123 45 67
              </a>
            </li>
            <li className="user-nav-item">
              <a className="user-nav-link enter" href="#">
                Вход
              </a>
            </li>
            <li className="user-nav-item">
              <a className="user-nav-link enter" href="#">
                Регистрация
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default AppHeader;
