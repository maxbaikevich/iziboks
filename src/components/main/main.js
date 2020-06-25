import React from "react";

import "./main.css";
import Select from "../select";

const Main = (props) => {
  
  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="main-title">
          Онлайн запись в сфере услуг{" "}
          <span className="mine-title__span">#просто_быстро_для_вас</span>
        </h1>
        <div className="main-select-box">
          <input
            className="main-input"
            placeholder="Пойск компаний и услуг"
          ></input>
          <button className="main-btn">Доп. параметры</button>
          <Select options={"Любая рубрика"} />
          <Select options={"Любая подрубрика"} />
          <div className="btn-groop">
            <button className="btn btn-dark">Найти</button>
            <button className="btn btn-light">На карте</button>
          </div>
        </div>
        <ul className="advantages-list">
          <li className="advantages-item">
            <p className="advantages-text"> <span className="advantages-text__span">90 000</span> компаний</p>
          </li>
          <li className="advantages-item">
            <p className="advantages-text"><span className="advantages-text__span">560 000</span> специалистов и мастеров</p>
          </li>
          <li className="advantages-item">
            <p className="advantages-text"><span className="advantages-text__span">2 мил</span> клиентов</p>
          </li>
          <li className="advantages-item">
            <p className="advantages-text"><span className="advantages-text__span">10 000</span> записей ежедневно</p>
          </li>
          <li className="advantages-item">
            <p className="advantages-text"><span className="advantages-text__span">45 000</span> отзывов</p>
          </li>
        </ul>

       
      </div>
    </main>
  );
};
export default Main;
