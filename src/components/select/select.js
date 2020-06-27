import React, { Component } from "react";
import "./select.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SelectItem from "../select-item";

export default class Select extends Component {
  constructor() {
    super();

    this.state = {
      vision: false,

    };
    
    this.onSelectClick = () => {
      this.setState((state) => {
        return {
          vision:!state.vision,
        };
      });
    };

    
  }
  render() {
    const { vision } = this.state;
    const { datas, onSelectClickItem} = this.props;

    const elements = datas.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="sekect-list__item">
          <SelectItem
            {...itemProps}
            onSelectClickItem={() => onSelectClickItem(item.label)}
          />
        </li>
      );
    });

    let classNames = "select-list select-list__none";
    let classNameDiv = "select-title";
    if (vision) {
      classNames = "select-list select-list__block";
      classNameDiv += " div-activ";
    }
  

    return (
      <div className="select-box">
        <div className="select" 
        onClick={this.onSelectClick}
        
         >
          <p className={classNameDiv}>{this.props.options}</p>
        </div>

        <ul className={classNames}>
          <PerfectScrollbar>
            {elements}
          </PerfectScrollbar>
        </ul>
      </div>
    );
  }
}
