import React, { Component } from "react";
import "./select.css";

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
    console.log(datas);
    let classNames = "select-list select-list__none";
    if (vision) {
      classNames = "select-list select-list__block";
    }
    let elements = []
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
          <p className="select-title">{this.props.options}</p>
        </div>
        <ul className={classNames}>{elements}</ul>
      </div>
    );
  }
}
