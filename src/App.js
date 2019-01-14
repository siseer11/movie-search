import React, { Component } from "react";
import Routes from "./routes";

import AppProvider from "./AppContext";
import { AppContext } from "./AppContext";
import DetailedInformationsPortal from "./containers/DetailedInformationsPortal";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Routes />
        <AppContext.Consumer>
          {({ appState: { detailedMovieModal } }) =>
            detailedMovieModal.visible && (
              <DetailedInformationsPortal
                movieId={detailedMovieModal.movieId}
              />
            )
          }
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}

export default App;
