import React, { Component } from 'react';

class Filter extends Component {
  state = {};

  render() {
    return (
      <section className="filter">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <span className="navbar-text">7 movies found</span>
            <div>
              <span className="navbar-text">Sort by: </span>{' '}
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-danger btn-sm active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    checked
                  />{' '}
                  release date
                </label>
                <label className="btn btn-danger btn-sm">
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    autoComplete="off"
                  />{' '}
                  raiting
                </label>
              </div>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Filter;
