import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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
    // const { history } = this.props;
    // history.push(
    //   `movies?search=${this.searchInputRef.current.value}&searchBy=title`
    // );

    this.props.moviesFetch(this.searchInputRef.current.value);

    console.log(this.searchInputRef.current.value);
    console.log(this.props.movies);
  };

  changeSearchBy = e => {
    const { changeSearchBy } = this.props;
    changeSearchBy(e.target.value);
  };

  getInputValue = () => {
    return this.searchInputRef.current.value;
  };

  render() {
    return (
      <form className="search-form">
        <div className="form-group">
          <h2>FIND YOUR MOVIE</h2>
          <input
            type="text"
            className="search-control"
            placeholder="Find your movie..."
            ref={this.searchInputRef}
          />
        </div>
        <div className="action-wrapper">
          <div className="btn-group">
            Search by:
            <label className="btn">
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
            <label className="btn">
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
          <button className="btn btn-outline" onClick={this.hangleSearch}>
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

export default withRouter(
  connect(
    moviesState,
    matDispatchToProps
  )(SearchInput)
);
