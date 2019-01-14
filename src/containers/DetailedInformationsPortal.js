import React from "react";
import ReactDOM from "react-dom";

import DetailedInformationsModal from "./DetailsInformationsModal";
import { AppContext } from "../AppContext";

const modalRoot = document.getElementById("modal-root");
const body = document.querySelector("body");

export default class DetailedInformationsPortal extends React.Component {
  root = document.createElement("div");

  componentDidMount = () => {
    //Apend the modal to the page
    modalRoot.appendChild(this.root);
    //Make sure that the scroll-bar for the body is hidden
    body.style.overflow = "hidden";
  };

  componentWillUnmount = () => {
    //Remove the modal from the page
    modalRoot.removeChild(this.root);
    //Reset the body overflow, so we can scroll again
    body.style.overflow = "unset";
  };

  render() {
    return ReactDOM.createPortal(
      <AppContext.Consumer>
        {({
          updateDetailedMoviesData,
          toggleDetailedMovieModal,
          appState: { detailedMovieModal, detailedMoviesData }
        }) => (
          <DetailedInformationsModal
            toggleDetailedMovieModal={toggleDetailedMovieModal}
            movieId={detailedMovieModal.movieId}
            detailedMoviesData={detailedMoviesData}
            updateDetailedMoviesData={updateDetailedMoviesData}
          />
        )}
      </AppContext.Consumer>,
      this.root
    );
  }
}
