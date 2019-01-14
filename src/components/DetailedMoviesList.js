import React from "react";
import PropTypes from "prop-types";

import { descriptionShortner } from "../helperFunctions/descriptionShortner";
import { BackgroundImageElement } from "./BackgroundImageElement";
import { StarIcon } from "./Svgs";

export const DetailedMoviesList = ({
  moviesData,
  toggleDetailedMovieModal
}) => (
  <ul className="search-results-items">
    {moviesData.map(el => {
      //get the obj with the data for this show
      const movieData = el.show;
      //Reduce the summary length to 250 characters;
      const summary = descriptionShortner({
        desc: movieData.summary || "",
        max: 250
      });
      return (
        <li
          className="movie-card"
          key={movieData.id}
          onClick={() => toggleDetailedMovieModal(movieData.id)}
        >
          <div className="left-content">
            <BackgroundImageElement
              extraClasses="movie-poster"
              imageObject={movieData.image}
            />
            <BackgroundImageElement
              extraClasses="blured-poster"
              imageObject={movieData.image}
            />
          </div>
          <div className="right-content movie-basic-details">
            <div className="top-content">
              <h2 className="movie-title">{movieData.name}</h2>
              <div className="rating">
                <StarIcon />
                <p className="rating-number">
                  {movieData.rating.average || "N/A"}
                </p>
              </div>
            </div>
            <div className="summary">{summary}</div>
          </div>
        </li>
      );
    })}
  </ul>
);

DetailedMoviesList.propTypes = {
  moviesData: PropTypes.array,
  toggleDetailedMovieModal: PropTypes.func.isRequired
};
