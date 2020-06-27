import React, { Component } from "react";
import "./select-item.css";

export default class SelectItem extends Component {
   
  render() {
      const {label, onSelectClickItem} = this.props
  

  return(
  <span 
  onClick={onSelectClickItem}>
      {label}
      </span>
  ) 
  }
}
