import React, { Component } from "react";
import Navbar from "./components/NavBar/Navbar";
import "./App.scss";
import TourList from "./components/TourList/index";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar></Navbar>
        <TourList></TourList>
      </main>
    );
  }
}
