import React from "react";
import AppHeader from "../app-header";
import Footer from "../footer";
import Main from "../main";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Main/>
      <Footer />
    </div>
  );
};
export default App;
