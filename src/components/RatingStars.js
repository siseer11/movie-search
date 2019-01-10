import React from "react";
import { StarIcon } from "./Svgs";

export const RatingStars = ({ rating, movieId }) => {
  //We have 5 stars, and the rating is going up to 10
  rating = (rating / 2) % 10;

  //the index of the last full star
  const lastFull = Math.floor(rating);
  //the amount of 'fill' in percentage for the last non empty star
  const fillAmountLastStar = ((rating * 10) % 10) * 10;

  //Array that is going to held our 5 stars
  let stars = [];

  //Populate the array with stars
  for (let i = 0; i < 5; i++) {
    if (i < lastFull) {
      //The star is before the last one so its full
      console.log(`${movieId}`);
      stars.push(<StarIcon key={i} id={`${i}-${movieId}`} />);
    } else if (i > lastFull) {
      //The star is after last filled one, so it's emty
      stars.push(<StarIcon key={i} id={`${i}-${movieId}`} percentage={0} />);
    } else {
      //This is the last filled star, and takes up the left %
      stars.push(
        <StarIcon
          key={i}
          id={`${i}-${movieId}`}
          percentage={fillAmountLastStar}
        />
      );
    }
  }

  return <div className="rating-stars">{stars}</div>;
};
