import React, { Component } from 'react';

class Search extends Component {
  state = {};

  render() {
    return (
      <form>
        <div className="form-group row">
          <h2 className="col">FIND YOUR MOVIE</h2>
          <div className="col">
            <input
              type="email"
              className="search-control"
              id="inputEmail3"
              placeholder="Find your movie..."
            />
          </div>
        </div>
        <div className="action-wrapper">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-danger btn-sm active">
              <input
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
              />{' '}
              TITLE
            </label>
            <label className="btn btn-danger btn-sm">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
              />{' '}
              GENRE
            </label>
          </div>
          <button type="submit" className="btn btn-danger">
            SEARCH
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
