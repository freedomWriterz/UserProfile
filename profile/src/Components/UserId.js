import React, { Component } from "react";

export default class UserId extends Component {
  render() {
    const { userName, imgURL } = this.props;
    return (
      <div>
        <div className="prof_img">
          <img src={imgURL}  alt=""/>
        </div>
        <h3 className="text-center">{userName}</h3>
      </div>
    );
  }
}
