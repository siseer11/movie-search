import React from "react";

import { StarIcon } from "../Svgs";
import { runtimeConvertor } from "../../helperFunctions/runtimeConvertor";
import { BackgroundImageElement } from "../BackgroundImageElement";

export const TopShortInfos = ({ movieData }) => (
  <div className="top-short-infos">
    <BackgroundImageElement
      extraClasses="left movie-poster"
      imageObject={movieData.image}
    />
    <div className="right">
      <h2 className="movie-title">{movieData.name}</h2>
      <p className="runtime">{runtimeConvertor(movieData.runtime)}</p>
      <p className="genres">{movieData.genres.join("/")}</p>
      <div className="rating">
        <p>Rating</p>
        <div className="right-rating">
          <StarIcon />
          <p>{movieData.rating.average || "N/A"}</p>
        </div>
      </div>
    </div>
  </div>
);
