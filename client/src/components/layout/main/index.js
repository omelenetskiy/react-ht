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
        console.log(movies);
        this.setState({
          movies: movies.data
        });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="home">
        <div className="card-wrapper">
          {movies ? (
            movies.map(movie => {
              const date = Date.parse(movie.release_date);
              const parsedDate = new Date(date).getFullYear();
              return (
                <div className="card" key={movie.id}>
                  <img
                    src={movie.poster_path}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="title-text">{movie.title}</span>
                      <span className="badge badge-secondary">
                        {parsedDate}
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
              );
            })
          ) : (
            <p>No films found</p>
          )}
        </div>
        {/* <ListItems />
    <ListItemPreview /> */}
      </div>
    );
  }
}

export default Home;
