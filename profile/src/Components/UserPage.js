import React, { Component } from "react";
import UserId from "./UserId";
import AddPost from "./AddPost";
import MyPosts from "./MyPosts";

export default class UserPage extends Component {
  state = {
    posts: [
      {
        _id: "1",
        imgUrl: "https://via.placeholder.com/200x100",
        userName: "Alaarg",
        postTitle: "post from database",
        postText:
          "Lorem Ipsum is simply dummy text of the printing and k a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l"
      },
      {
        _id: "2",
        imgUrl: "https://via.placeholder.com/200x100",
        userName: "lolo",
        postTitle: "post from database",
        postText:
          "Loremd a type specimen book. It has survived not only five centuries, but also the l"
      },
      {
        _id: "3",
        imgUrl: "https://via.placeholder.com/200x100",
        userName: "max",
        postTitle: "post from database",
        postText:
          "Lorem Ipsum is asurvived not only five centuries, but also the l"
      },
      {
        _id: "4",
        imgUrl: "https://via.placeholder.com/200x100",
        userName: "soso",
        postTitle: "post from database",
        postText:
          "Lorem Ipsum is asurvived not only five centuries, but also the l"
      }
    ]
  };

  addItem = (x) => {
  
    this.setState({
      posts: [...this.state.posts, x]
    })
    console.log(x);
  
  }

  

  deletePost = id => {
    console.log("deleted", typeof id);
    this.setState({
      posts: this.state.posts.filter(post => post._id !== id)
    });
  };
  render() {
    const { userName, imgURL } = this.props;
    const { posts } = this.state;
    return (
      <div className="container">
        <UserId userName={userName} imgURL={imgURL} />

        <div className="text-center">
          <button type="button" className="btn btn-outline-primary btn-lg">
            Large button
          </button>
          <button type="button" className="btn btn-outline-primary btn-lg">
            Large button
          </button>
          <button type="button" className="btn btn-outline-primary btn-lg">
            Large button
          </button>
        </div>

        <AddPost  addItem={this.addItem} />

        <h3 className="MyPosts">My Posts</h3>

        {posts.map((post, index) => {
          return (
            <MyPosts key={index} post={post} deletePost={this.deletePost} />
          );
        })}
      </div>
    );
  }
}
