import React from "react";

import { AppContext } from "../AppContext";
import { DetailedMoviesList } from "../components/DetailedMoviesList";
import { LoadingPage } from "../components/LoadingPage";

export default class SearchPage extends React.Component {
  state = {
    loading: true,
    moviesData: []
  };

  /*
   * When the component mounts,
   * fetch the API, for the shows that matches the searched show
   */
  componentDidMount = () => {
    const itemSearched = this.props.match.params.show;
    this.fetchData(itemSearched);
  };

  /*
   * When the component recieve new props fetch data again,
   * for the cases when the user searches show from the searchResultPage
   */
  componentWillReceiveProps(props) {
    const itemSearched = props.match.params.show;
    this.fetchData(itemSearched);
  }

  fetchData = movieName => {
    //Fetch the data for a specific movie
    //at the end, set the loading to false and show the data
    fetch(`http://api.tvmaze.com/search/shows?q=${movieName}`)
      .then(rawData => rawData.json())
      .then(parsedData => {
        this.setState({
          loading: false,
          moviesData: parsedData
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { loading, moviesData } = this.state;
    return (
      <AppContext.Consumer>
        {({ toggleDetailedMovieModal }) => (
          <React.Fragment>
            <div className="search-results-section">
              <h2 className="section-title">Search Results</h2>
              {loading ? (
                <LoadingPage />
              ) : moviesData.length > 0 ? (
                <DetailedMoviesList
                  moviesData={moviesData}
                  toggleDetailedMovieModal={toggleDetailedMovieModal}
                />
              ) : (
                <div className="no-search-results">
                  404 - No results could be found!
                </div>
              )}
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}
