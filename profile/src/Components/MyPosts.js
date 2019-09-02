import React, { Component } from "react";

export default class MyPosts extends Component {
  render() {
    const { posts ,deletePost } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={posts.imgUrl} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <button className="btn btn-danger delet_post" onClick={deletePost .bind(this, this.props.id)}>X</button>
                <h5 className="card-title">{posts.postTitle}</h5>
                <p className="card-text">{posts.postText}</p>
                <p className="card-text">
                  <small className="text-muted">{posts.userName }</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
