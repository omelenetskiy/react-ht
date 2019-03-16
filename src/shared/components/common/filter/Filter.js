import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {
  state = {};

  render() {
    const {
      movies: { movies }
    } = this.props;

    return (
      <section className="filter">
        <span className="navbar-text">{`${movies &&
          movies.length} movies found`}</span>
        <div>
          <span className="navbar-text">Sort by: </span>{" "}
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-danger btn-sm active">
              <input
                type="radio"
                name="options"
                checked
                onChange={() => console.log("changed")}
              />{" "}
              release date
            </label>
            <label className="btn btn-danger btn-sm">
              <input
                type="radio"
                name="options"
                checked
                onChange={() => console.log("changed")}
              />{" "}
              raiting
            </label>
          </div>
        </div>
      </section>
    );
  }
}

function moviesState(state) {
  return {
    movies: state.movies
  };
}

export default connect(moviesState)(Filter);
