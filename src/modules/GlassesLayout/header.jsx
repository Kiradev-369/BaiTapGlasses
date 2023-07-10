import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
        }}
        className="header"
      >
        TRY GLASSES APP ONLINE
      </section>
    );
  }
}
