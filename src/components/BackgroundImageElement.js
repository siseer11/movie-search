import React from "react";
import PropTypes from "prop-types";

//Used for movie/actor poster, if the movie or actor does not have a photo
//it will show the default one.
export const BackgroundImageElement = ({
  extraClasses,
  imageObject,
  elementType = "div",
  children
}) => {
  //undefinedImageLink - Image that will be used in case there is no image provided for the movie/actor
  const undefinedImageLink =
    "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  let imageLink;
  if (!imageObject) {
    imageLink = undefinedImageLink;
  } else {
    //If there is an image provided, use it. The imageObject will have a original and a medium one, we will grab the
    //original one and use it.
    imageLink = imageObject.original;
  }

  return (
    <React.Fragment>
      {elementType == "div" ? (
        <div
          className={extraClasses}
          style={{
            backgroundImage: `url(${imageLink})`
          }}
        >
          {children}
        </div>
      ) : (
        <li
          className={extraClasses}
          style={{
            backgroundImage: `url(${imageLink})`
          }}
        >
          {children}
        </li>
      )}
    </React.Fragment>
  );
};

BackgroundImageElement.propTypes = {
  extraClasses: PropTypes.string,
  imageObject: PropTypes.object,
  elementType: PropTypes.string
};
