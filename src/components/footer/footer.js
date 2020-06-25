import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <h1 className="footer-title">Популярные рубрики</h1>
        <ul className="footer-heading-list footer-heading-list--mod">
            <li class="footer-heading-item">
                <p className="footer-heading-text">Автосервис</p>
            </li>
            <li class="footer-heading-item">
                <p className="footer-heading-text">Безопасность</p>
            </li>
            <li class="footer-heading-item">
                <p className="footer-heading-text">Жильё и дом</p>
            </li>
            </ul>
            <ul className="footer-heading-list">
            <li class="footer-heading-item footer-heading-item--first">
                <p className="footer-heading-text footer-heading-text--mod">Бизнес</p>
            </li>
            <li class="footer-heading-item footer-heading-item--mod">
                <p className="footer-heading-text footer-heading-text--mod">Еда и напитки</p>
            </li>
            <li class="footer-heading-item footer-heading-item--mod">
                <p className="footer-heading-text footer-heading-text--mod">Здоровье и фитнес</p>
            </li>

        </ul>
      </div>
    </footer>
  );
};
export default Footer;
