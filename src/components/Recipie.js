import React, { Component } from "react";

class Recipie extends Component {
  render() {
    return (
      <div className="main">
        <div className="card text-dark bg-light mb-3" style={{ maxWidth: 400 }}>
          <div className="card-header">
            <h1>{this.props.title}</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <img src={this.props.image}></img>
            </h5>
            <p className="card-text">Calorie: {this.props.calories}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipie;
