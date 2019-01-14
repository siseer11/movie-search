import React from "react";

import { ActorsHorizontalScroller } from "../components/ActorsHorizontalScroller";
import { MoviesHorizontalScroller } from "../components/MoviesHorizontalScroller";
import { AppContext } from "../AppContext";

export default class Home extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ appState: { recomandedMovies, recomandedActors } }) => (
          <div>
            <div className="recommended-movies">
              <h2 className="section-title">Recommended Movies</h2>
              <MoviesHorizontalScroller moviesData={recomandedMovies} />
            </div>
            <div className="recommended-actors">
              <h2 className="section-title">Featured Actors</h2>
              <ActorsHorizontalScroller actorsData={recomandedActors} />
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
