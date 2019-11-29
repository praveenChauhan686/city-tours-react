import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          ></img>
          <span className="close-btn">
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>city</h3>
          <h4>name</h4>
          <h5>
            info{" "}
            <span>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>Mumbai sapno ki nagri</p>
        </div>
      </article>
    );
  }
}
