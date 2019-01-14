import React from "react";
import PropTypes from "prop-types";
import { LoadingPage } from "../components/LoadingPage";

import { DetailedInformationsModalView } from "../components/DetailedInformationsModal/DetailedInformationsModalView";

export default class DetailsInformationsModal extends React.Component {
  static propTypes = {
    toggleDetailedMovieModal: PropTypes.func.isRequired, //Func that toggles the state of the modal, in the context
    movieId: PropTypes.number.isRequired, //The wanted movieId, one that the user pressed on
    detailedMoviesData: PropTypes.object.isRequired, //All the movies that we have the detailed data for
    updateDetailedMoviesData: PropTypes.func.isRequired //Add the new movie that we fetched
  };

  state = {
    movieData: null,
    loading: true
  };

  componentDidMount = () => {
    //When the component mounts, fetch the data
    this.fetchDetailedData();
  };

  //Fetch data
  fetchDetailedData = () => {
    const {
      detailedMoviesData,
      movieId,
      updateDetailedMoviesData
    } = this.props;
    //Check if the movie have allready been fetched
    if (detailedMoviesData.hasOwnProperty(movieId)) {
      //Set the data to this movieData and show it
      this.setMovieData(detailedMoviesData[movieId]);
    } else {
      //Fetch data if the movie was not fetched before
      fetch(
        `http://api.tvmaze.com/shows/${movieId}?embed[]=episodes&embed[]=cast&embed[]=seasons`
      )
        .then(rawData => rawData.json())
        .then(dataParsed => {
          //Set the movieData into the state
          this.setMovieData(dataParsed);
          //Save the movie into the context
          updateDetailedMoviesData({ [dataParsed.id]: dataParsed });
        })
        .catch(err => console.log(err));
    }
  };

  //Stops the loading , and chages the movieData from the state
  setMovieData = movieData => {
    this.setState({
      loading: false,
      movieData: movieData
    });
  };

  render() {
    const { loading, movieData } = this.state;
    return (
      <div className="details-modal">
        {loading ? (
          <LoadingPage />
        ) : (
          <DetailedInformationsModalView
            movieData={movieData}
            toggleModal={this.props.toggleDetailedMovieModal}
          />
        )}
      </div>
    );
  }
}
