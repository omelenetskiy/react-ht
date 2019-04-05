import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Facebook } from 'react-content-loader';
import { actionMovieFetch } from '../../store/actions/movie';
import { getMovieState } from '../../store/selectors';

import StyledMovie from '../../styled/moviePreview';

const StyledGenres = styled.div`
  background-color: ${(props) => props.theme.stylishColorLight};
  padding: 10px;
`;

class MoviePreview extends Component {
  static async fetchData({ store, params }) {
    await store.dispatch(actionMovieFetch(params.id));
  }

  render() {
    const { movie } = this.props;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();

    return (
      <Fragment>
        <Helmet>
          <title>{`${movie.title}`}</title>
        </Helmet>
        {movie.id ? (
          <Fragment>
            <StyledMovie>
              <img
                src={movie.poster_path}
                className="card-img"
                alt={movie.title}
              />
              <div className="card-body">
                <div className="card-title">
                  <h1>{movie.title}</h1>
                  {movie.vote_average ? (
                    <span>{movie.vote_average}</span>
                  ) : null}
                </div>
                <div className="card-tagline">
                  {movie.tagline && <small>{movie.tagline}</small>}
                </div>
                <p className="card-time">
                  <b>{`${parsedDate}`}</b>
                  {movie.runtime && <b>{`${movie.runtime} min`}</b>}
                </p>
                <p className="card-text">{movie.overview}</p>
              </div>
            </StyledMovie>
            <StyledGenres>
              Films by genres: {movie.genres.join(', ')}
            </StyledGenres>
          </Fragment>
        ) : (
          <Facebook />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: getMovieState(state),
});

export default connect(mapStateToProps)(MoviePreview);
