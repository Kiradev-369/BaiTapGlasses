import React, { Component } from "react";

export default class Model extends Component {
  state = {
    srcImg: "./img/v1.png",
  };
  render() {
    return (
      <div>
        <div className="d-flex mt-5">
          <div className="col-1 w-50  text-center">
            <div style={{ position: "relative" }} className="model-img">
              <img style={{ width: "40%" }} src="./img/model.jpg" alt="" />
              <div className="model-after">
                <img
                  style={{
                    width: "20%",
                    position: "absolute",
                    top: "81px",
                    left: "251px ",
                  }}
                  src="./img/v1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-2 w-50 text-center">
            <div style={{ position: "relative" }} className="model-img">
              <img style={{ width: "40%" }} src="./img/model.jpg" alt="" />
            </div>
            <div className="model-after">
              <img
                style={{
                  width: "10%",
                  position: "absolute",
                  top: "194px",
                  right: "252px ",
                }}
                src={this.state.srcImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            width: "50%",
            margin: "50px auto 0 ",
            padding: "10px",
          }}
        >
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v1.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v1.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v2.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v2.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v3.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v3.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v4.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v4.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v5.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v5.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v6.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v6.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v7.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v7.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v8.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v8.png"
              alt=""
            />
          </button>
          <button
            onClick={() => {
              this.setState({
                srcImg: "./img/v9.png",
              });
            }}
            className="btn btn-warning"
            style={{
              display: "inline-block",
              width: "10%",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            <img
              style={{ width: "100%", display: "" }}
              src="./img/v9.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }
}
