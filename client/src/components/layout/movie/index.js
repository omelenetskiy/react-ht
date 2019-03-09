import React from 'react';

const Movie = () => (
  <article className="movie">
    <div className="card">
      <div className="row no-gutters">
        <div className="col">
          <img
            src="https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg"
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">
              Card title{' '}
              <span className="badge badge-pill badge-danger">4.1</span>
            </h1>
            <p className="card-text">
              <small>Oscar-winning Movies</small>
            </p>
            <p className="card-text">
              <small>1994</small>
              <small>154 min</small>
            </p>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.This is a wider card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default Movie;
