import React, {Component} from "react";

import "./main.css";
import Select from "../select";

export default class Main extends Component {
  constructor(){
    super()
 
  this.state = {
    options1 :'любая рубрика',
    options2 :'любая подрубрика'
  }
  this.newOptionsItem =(label) => {
    this.setState({
      options1 :label
      
    })
    this.newOptionsItem2 =(label) => {
      this.setState({
        options2 :label
        
      })
    }
    
  }
}
  
  render() {
    const selectData = [
      { label: "любая рубрика 1", id: 1 },
      { label: "любая рубрика 2", id: 2 },
      { label: "любая рубрика 3", id: 3 },
      { label: "любая рубрика 4", id: 4 },
      { label: "любая рубрика 5", id: 5 },
      { label: "любая рубрика 6", id: 6 },
      { label: "любая рубрика 7", id: 7 },
      { label: "любая рубрика 8", id: 8 },
      { label: "любая рубрика 9", id: 9 },
      { label: "любая рубрика 10", id: 10 },
    ];
    const selectData1 = [
      { label: "любая подрубрика 1", id: 11 },
      { label: "любая подрубрика 2", id: 12 },
      { label: "любая подрубрика 3", id: 13 },
      { label: "любая подрубрика 4", id: 14 },
      { label: "любая подрубрика 5", id: 15 },
    ];
    const {options1,options2} = this.state

     
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
            <Select
             onSelectClickItem={this.newOptionsItem}
              options={options1}
              datas={selectData}
            />
            <Select
              onSelectClickItem={this.newOptionsItem2}
              options={options2}
              datas={selectData1}
            />
            <div className="btn-groop">
              <button className="btn btn-dark">Найти</button>
              <button className="btn btn-light">На карте</button>
            </div>
          </div>
          <ul className="advantages-list">
            <li className="advantages-item">
              <p className="advantages-text">
                {" "}
                <span className="advantages-text__span">90 000</span> компаний
              </p>
            </li>
            <li className="advantages-item">
              <p className="advantages-text">
                <span className="advantages-text__span">560 000</span>{" "}
                специалистов и мастеров
              </p>
            </li>
            <li className="advantages-item">
              <p className="advantages-text">
                <span className="advantages-text__span">2 мил</span> клиентов
              </p>
            </li>
            <li className="advantages-item">
              <p className="advantages-text">
                <span className="advantages-text__span">10 000</span> записей
                ежедневно
              </p>
            </li>
            <li className="advantages-item">
              <p className="advantages-text">
                <span className="advantages-text__span">45 000</span> отзывов
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
  };

  }

  

