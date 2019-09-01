import React, { Component } from "react";

export default class AddPost extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <h3>New Post</h3>
          <label for="exampleFormControlTextarea1">Example text</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>

          <div class="form-group">
            <label for="exampleFormControlInput1">img URL</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="www.imgURL.jpg"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">
          puplish{" "}
        </button>
      </form>
    );
  }
}
