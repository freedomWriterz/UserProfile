import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    postTitle: "",
    postText: "",
    imgUrl: "",
    posts: [{}]
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

  addItem=(e)=> {
    e.preventDefault();
    const ptitle = document.getElementById('psTitile').value;
    const ptext =  document.getElementById('txtarea').value;
    const imgurl = document.getElementById('imgurl').value;
    const obj = { postTitle: ptitle, postText: ptext, imgUrl: imgurl };
    console.log( this.props);
    
    this.props.addItem(obj)
  }

  render() {
    return (
      <div>

      <form onSubmit={this.addItem}>
        <div className="form-group">
          <h3>New Post</h3>

          <label>post titile </label>

          <input
            type="text"
            id="psTitile"
            className="form-control"
            placeholder="post Titile"
            onChange={this.postTitle}
          />
          <label>Example text</label>
          <textarea
          id="txtarea"
            className="form-control"
            rows="6"
            onChange={this.postText}
          ></textarea>

          <div className="form-group">
            <label>img URL</label>
            <input
            id="imgurl"
              type="text"
              className="form-control"
              placeholder="www.imgURL.jpg"
              onChange={this.imgUrl}
            />
          </div>
        </div>
        <button
          type="submit"
          // onSubmit={this.addItem}
          className="btn btn-primary btn-lg"
        >
          Puplish
        </button>
      </form>
      </div>

    );
  }
}
