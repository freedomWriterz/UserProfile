import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    postTitle: "",
    postText: "",
    imgUrl: ""
  };

  postTitle = e => {
    this.setState({
      postTitle: e.target.value
    });
  };

  postText = e => {
    this.setState({
      postText: e.target.value
    });
  };

  imgUrl = e => {
    this.setState({
      imgUrl: e.target.value
    });
  };
  addItem(e) {
    console.log();



    
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <h3>New Post</h3>

          <label>post titile </label>

          <input
            type="text"
            className="form-control"
            placeholder="post Titile"
            onChange={this.postTitle}
          />
          <label>Example text</label>
          <textarea
            className="form-control"
            rows="6"
            onChange={this.postText}
          ></textarea>

          <div className="form-group">
            <label>img URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="www.imgURL.jpg"
              onChange={this.imgUrl}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={this.addItem}
          className="btn btn-primary btn-lg"
        >
          Puplish
        </button>
      </div>
    );
  }
}
