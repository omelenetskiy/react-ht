import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getMoviesState } from "../../../store/selectors";

const StyledFilter = styled.section`
  width: 100%;
  background-color: ${props => props.theme.stylishColor};
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;

  .btn-group {
    display: inline-flex;
  }
`;

class Filter extends Component {
  state = {};

  render() {
    const {
      movies: { movies }
    } = this.props;

    return (
      <StyledFilter>
        {movies && movies.length ? (
          <Fragment>
            <span>{`${movies && movies.length} movies found`}</span>
            <div>
              <span>Sort by: </span>{" "}
              <div className="btn-group">
                <label>
                  <input
                    type="radio"
                    name="options"
                    checked
                    onChange={() => console.log("changed")}
                  />{" "}
                  release date
                </label>
                <label>
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
          </Fragment>
        ) : (
          ""
        )}
      </StyledFilter>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: getMoviesState(state)
  };
};

export default connect(mapStateToProps)(Filter);
