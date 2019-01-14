import React from "react";
import PropTypes from "prop-types";

import { HeartIcon } from "./Svgs";
import { BackgroundImageElement } from "./BackgroundImageElement";

export const ActorsHorizontalScroller = ({ actorsData }) => (
  <ul className="horizontal-scroll-wrapper">
    {actorsData.map(el => {
      const actorData = el.person;
      return (
        <BackgroundImageElement
          key={actorData.id}
          extraClasses="horizontal-scroll-card actor-card"
          imageObject={actorData.image}
        >
          <div className="fade-overlay" />
          <div className="like-button">
            <HeartIcon />
          </div>
          <h2 className="actor-name">{actorData.name}</h2>
        </BackgroundImageElement>
      );
    })}
  </ul>
);

ActorsHorizontalScroller.propTypes = {
  actorsData: PropTypes.array.isRequired
};
