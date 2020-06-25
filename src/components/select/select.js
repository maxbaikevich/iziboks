import React, { Component } from "react";
import "./select.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';

export default class Select extends Component {
  constructor() {
    super();

    this.state = {
      vision: false,
    };
    this.onSelectClick = () => {
      this.setState((state) => {
        return {
          vision: !state.vision,
        };
      });
    };
   

  }
  render() {
    const { vision } = this.state;
    const { datas } = this.props;
   
    let classNames = "select-list select-list__none";
    let classNameDiv ="select-title" 
    if (vision) {
      classNames = "select-list select-list__block";
      classNameDiv += " div-activ"
      
    }
    let elements = [];
    if (datas) {
      elements = datas.map((item) => {
        return (
          <li key={item.id} className="sekect-list__item">
            {item.label}
          </li>
        );
      });
    }
    return (
      <div className="select-box">
        <div className="select" onClick={this.onSelectClick}>
          <p className={classNameDiv}>{this.props.options}</p>
        </div>

        <ul className={classNames}>
          <PerfectScrollbar onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}>{elements}</PerfectScrollbar>
        </ul>
      </div>
    );
  }
}
