import React, { Component } from "react";
import UserId from "./UserId";
import AddPost from "./AddPost";
import MyPosts from './MyPosts'
export default class UserPage extends Component {
  render() {
    const { userName, imgURL } = this.props;
    return (
      <div className="container">
        <UserId userName={userName} imgURL={imgURL} />

        <div className="text-center">
          <button type="button" class="btn btn-outline-primary btn-lg">
            Large button
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg">
            Large button
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg">
            Large button
          </button>
        </div>

        <AddPost />


         <h3 className='MyPosts'>My Posts</h3>
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
        <MyPosts/>
      </div>
    );
  }
}
