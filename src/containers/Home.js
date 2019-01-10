import React from "react";
import { RatingStars } from "../components/RatingStars";
import { HeartIcon } from "../components/Svgs";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="recommended-movies">
          <h2 className="section-title">Recommended Movies</h2>
          <RecMovies />
        </div>
        <div className="recommended-actors">
          <h2 className="section-title">Featured Actors</h2>
          <RecActors />
        </div>
      </div>
    );
  }
}

const RecActors = () => (
  <ul className="horizontal-scroll-wrapper">
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/3/7814.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
    <li
      className="horizontal-scroll-card actor-card"
      style={{
        backgroundImage:
          "url(http://static.tvmaze.com/uploads/images/original_untouched/0/6.jpg)"
      }}
    >
      <div className="fade-overlay" />
      <div className="like-button">
        <HeartIcon />
      </div>
      <h2 className="actor-name">Mike Vogel</h2>
    </li>
  </ul>
);

const RecMovies = () => (
  <ul className="horizontal-scroll-wrapper">
    <li className="horizontal-scroll-card movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage:
            "url('http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg')"
        }}
      />
      <div className="description">
        <p className="card-title">Doctor Strange</p>
        <div className="card-rating">
          8.20
          <RatingStars rating={8.2} movieId={0} />
        </div>
      </div>
    </li>
    <li className="horizontal-scroll-card movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage:
            "url('http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg')"
        }}
      />
      <div className="description">
        <p className="card-title">Doctor Strange</p>
        <div className="card-rating">
          8.20
          <RatingStars rating={5} movieId={1} />
        </div>
      </div>
    </li>
    <li className="horizontal-scroll-card movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage:
            "url('http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg')"
        }}
      />
      <div className="description">
        <p className="card-title">Doctor Strange</p>
        <div className="card-rating">
          8.20
          <RatingStars rating={6.5} movieId={2} />
        </div>
      </div>
    </li>
    <li className="horizontal-scroll-card movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage:
            "url('http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg')"
        }}
      />
      <div className="description">
        <p className="card-title">Doctor Strange</p>
        <div className="card-rating">
          8.20
          <RatingStars rating={5.2} movieId={3} />
        </div>
      </div>
    </li>
    <li className="horizontal-scroll-card movie-card">
      <div
        className="movie-poster"
        style={{
          backgroundImage:
            "url('http://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg')"
        }}
      />
      <div className="description">
        <p className="card-title">Doctor Strange</p>
        <div className="card-rating">
          8.20
          <RatingStars rating={3} movieId={4} />
        </div>
      </div>
    </li>
  </ul>
);
