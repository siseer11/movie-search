import React from "react";
import PropTypes from "prop-types";

import { AppContext } from "../AppContext";
import { BackgroundImageElement } from "./BackgroundImageElement";
import { RatingStars } from "./RatingStars";

export const MoviesHorizontalScroller = ({ moviesData }) => (
  <AppContext.Consumer>
    {({ toggleDetailedMovieModal }) => (
      <ul className="horizontal-scroll-wrapper">
        {moviesData.map(el => {
          const showData = el.show;
          return (
            <li
              key={showData.id}
              className="horizontal-scroll-card movie-card"
              onClick={() => toggleDetailedMovieModal(showData.id)}
            >
              <BackgroundImageElement
                extraClasses="movie-poster"
                imageObject={showData.image}
              />
              <div className="description">
                <p className="card-title">{showData.name}</p>
                <div className="card-rating">
                  <p>{showData.rating.average || "N/A"}</p>
                  <RatingStars
                    rating={showData.rating.average || 0}
                    movieId={showData.id}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    )}
  </AppContext.Consumer>
);

MoviesHorizontalScroller.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.object).isRequired
};
