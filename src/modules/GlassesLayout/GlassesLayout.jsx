import React, { Component } from "react";
import Header from "./header";
import Model from "./model";

export default class GlassesLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Model />
        </section>
      </div>
    );
  }
}
