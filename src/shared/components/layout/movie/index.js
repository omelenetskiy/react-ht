import React, { Component } from 'react';

class Movie extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    console.log(this.props.location);
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(
        `https://reactjs-cdp.herokuapp.com/movies/${this.props.match.params.id}`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({
            movie: data
          });
        });
    }
  }

  render() {
    const { movie } = this.state;
    const date = Date.parse(movie.release_date);
    const parsedDate = new Date(date).getFullYear();
    return (
      <article className="movie">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={movie.poster_path} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">
                  {`${movie.title} `}
                  <span className="badge badge-pill badge-danger">
                    {movie.vote_average}
                  </span>
                </h1>
                <p className="card-text">
                  <small>{movie.tagline}</small>
                </p>
                <p className="card-text">
                  <small>{`${parsedDate}`}</small>{' '}
                  <small>{`${movie.runtime} min`}</small>
                </p>
                <p className="card-text">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Movie;
