import React, { Component } from "react";
import userImage from "../images/user.png";
//Grand Child File

class PostCard extends Component {
  render() {
    return (
      <div className="card mb-2">
        <div className="row px-2">
          <div className="col-2 mt-2">
            <img src={userImage} alt="profile" width="50px" height="50px" />
          </div>
          <div className="col-5 mt-3">
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.desc}</p>
          </div>
          <div className="col-5 mt-3">
            <button className="btn btn-sm btn-info">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn btn-sm btn-warning me-1">
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-sm btn-danger">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
