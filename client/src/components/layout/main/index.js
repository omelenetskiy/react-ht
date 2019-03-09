import React, { Component } from 'react';
// import ListItems from '../../../containers/list_items';
// import ListItemPreview from '../../../containers/list_item_preview';

class Home extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data
        });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="home">
        <p>No films found</p>
        <div className="card-wrapper">
          {movies &&
            movies.map(movie => (
              <div className="card" key={movie.id}>
                <img
                  src={movie.poster_path}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>{movie.title}</span>
                    <span className="badge badge-secondary">
                      {movie.release_date}
                    </span>
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {movie.genres.map(genre => (
                        <span>{genre}</span>
                      ))}
                    </small>
                  </p>
                </div>
              </div>
            ))}
        </div>
        {/* <ListItems />
    <ListItemPreview /> */}
      </div>
    );
  }
}

export default Home;
