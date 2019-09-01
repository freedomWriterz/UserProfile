import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import UserPage from "./Components/UserPage";

export default class App extends Component {
  state = {
    userName: "Ahmad Alaarg",
    imgURL: "https://via.placeholder.com/200"
  };
  render() {
    const { userName, imgURL } = this.state;
    return (
      <div>
        <Navbar />
        <UserPage userName={userName} imgURL={imgURL} />
      </div>
    );
  }
}
