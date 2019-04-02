import React, { Component } from "react";
import Router from "next/router";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Main extends Component {
  handleClick = () => {
    Router.push("/dashboard");
  };
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-4">Hello!</h1>
          <p class="lead">This is simple serverside rendering app</p>
          <hr class="my-4" />
          <p>In this we configured Routes and bootstrap css.</p>
          <Link href="/login"><a className=" btn btn-outline-success mr-1">Login</a></Link>
          <Link href="/home"><a className=" btn btn-outline-info mr-1">Home</a></Link>
          <button className="btn btn-outline-primary" onClick={this.handleClick}>
            Dashboard
        </button>
        </div>

      </div>
    );
  }
}
