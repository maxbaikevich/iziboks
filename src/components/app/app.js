import React, { Component } from "react";
import AppHeader from "../app-header";
import Footer from "../footer";
import Main from "../main";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <Main />
        <Footer />
      </div>
    );
  }
}
