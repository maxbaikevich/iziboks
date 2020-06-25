import React, { Component } from "react";
import "./select.css";

export default class Select extends Component {
  render() {
    return (
      <div className="select-box">
        <div className="select">
          <p className="select-title">{this.props.options}</p>
        </div>
        <ul className="select-list">
          <li className="sekect-list__item"></li>
          <li className="sekect-list__item"></li>
          <li className="sekect-list__item"></li>
          <li className="sekect-list__item">Название рубрики</li>
        </ul>
      </div>
    );
  }
}
