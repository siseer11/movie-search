import React from "react";

import PropTypes from "prop-types";
import { BackgroundImageElement } from "../BackgroundImageElement";
import { ArrowIcon, HeartIcon } from "../Svgs";

export const TopBanner = ({ imageObject, toggleModal }) => (
  <BackgroundImageElement extraClasses="top-banner" imageObject={imageObject}>
    <div className="buttons">
      <div className="back-button" onClick={() => toggleModal()}>
        <ArrowIcon />
      </div>
      <div className="like-button">
        <HeartIcon />
      </div>
    </div>
    <div className="fade-effect" />
  </BackgroundImageElement>
);

TopBanner.propTypes = {
  imageObject: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired
};
