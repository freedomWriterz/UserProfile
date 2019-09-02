import React, { Component } from "react";

export default class MyPosts extends Component {
  render() {
    const { post, deletePost } = this.props;
    console.log(post);
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={post.imgUrl} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <button
                  className="btn btn-danger delet_post"
                  onClick={deletePost.bind(this, post._id)}
                >
                  X
                </button>
                <h5 className="card-title">{post.postTitle}</h5>
                <p className="card-text">{post.postText}</p>
                <p className="card-text">
                  <small className="text-muted">{post.userName}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
