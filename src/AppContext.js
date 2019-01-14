import React from "react";

import { recomandedMovies } from "./mockData/recomandedMovies";
import { recomandedActors } from "./mockData/recomandedActors";

export const AppContext = React.createContext();

export default class AppProvider extends React.Component {
  state = {
    recomandedMovies: recomandedMovies, //Recomandend movies, mock data for now
    recomandedActors: recomandedActors, //Recomanded actors, mock data for now
    detailedMoviesData: {}, //Movies that we allready fetched the details for
    likedMovies: [], //Movies that the user did like
    likedActors: [], //Acotrs that the user did like
    detailedMovieModal: {
      //Modal state
      visible: false,
      movieId: null
    }
  };

  //It toggles the modal,
  //If called with a movieId, it will show it, otherwise it will hide it
  toggleDetailedMovieModal = (movieId = null) => {
    this.setState({
      detailedMovieModal: {
        visible: movieId ? true : false,
        movieId: movieId
      }
    });
  };

  //Update the movies that we have the detailed data for
  updateDetailedMoviesData = newMovieData => {
    this.setState(prevState => ({
      detailedMoviesData: {
        ...prevState.detailedMoviesData,
        ...newMovieData
      }
    }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          appState: this.state,
          toggleDetailedMovieModal: this.toggleDetailedMovieModal,
          updateDetailedMoviesData: this.updateDetailedMoviesData
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
