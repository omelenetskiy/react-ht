import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionSearcByChange,
  actionMoviesFetch
} from "../../../store/actions/movies";

class SearchInput extends Component {
  searchInputRef = React.createRef();
  searchByTitleRef = React.createRef();
  searchByGenreRef = React.createRef();

  hangleSearch = e => {
    e.preventDefault();
    this.props.moviesFetch(this.searchInputRef.current.value);

    console.log(this.searchInputRef.current.value);
    console.log(this.props.movies);
  };

  changeSearchBy = e => {
    const { changeSearchBy } = this.props;
    changeSearchBy(e.target.value);
  };

  render() {
    return (
      <form className="search-form">
        <div className="form-group row">
          <h2 className="col">FIND YOUR MOVIE</h2>
          <input
            type="text"
            className="search-control"
            placeholder="Find your movie..."
            ref={this.searchInputRef}
          />
        </div>
        <div className="action-wrapper">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            Search by:
            <label className="btn btn-danger btn-sm active">
              <input
                type="radio"
                value="title"
                name="search"
                ref={this.searchByTitleRef}
                defaultChecked
                onChange={this.changeSearchBy}
              />{" "}
              TITLE
            </label>
            <label className="btn btn-danger btn-sm">
              <input
                type="radio"
                value="genres"
                name="search"
                ref={this.searchByGenreRef}
                onChange={this.changeSearchBy}
              />{" "}
              GENRE
            </label>
          </div>
          <button className="btn btn-danger" onClick={this.hangleSearch}>
            SEARCH
          </button>
        </div>
      </form>
    );
  }
}

function moviesState(state) {
  return {
    movies: state.movies
  };
}

const matDispatchToProps = dispatch => ({
  changeSearchBy: value => dispatch(actionSearcByChange(value)),
  moviesFetch: value => dispatch(actionMoviesFetch(value))
});

export default connect(
  moviesState,
  matDispatchToProps
)(SearchInput);
