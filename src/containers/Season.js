import React from "react";

import { BackgroundImageElement } from "../components/BackgroundImageElement";
import { TableData } from "../components/DetailedInformationsModal/TableData";
import { EpisodesList } from "../components/DetailedInformationsModal/EpisodesList";

export default class Season extends React.Component {
  state = {
    episodesShown: false
  };

  toggleEpisodes = () => {
    this.setState(prevState => ({
      episodesShown: !prevState.episodesShown
    }));
  };

  render() {
    const { seasonData, seasonEpisodes } = this.props;
    const { episodesShown } = this.state;
    return (
      <React.Fragment>
        <div className="season-data">
          <div className="top-content">
            <BackgroundImageElement
              extraClasses="season-poster"
              imageObject={seasonData.image}
            />
            <div className="right-content">
              <div className="season-table-details" />
              <TableData
                seasonData={{
                  Title: seasonData.name || `Season ${seasonData.number}`,
                  Episodes: seasonData.episodeOrder,
                  Premiere: seasonData.premiereDate,
                  "End date": seasonData.endDate
                }}
              />
              <div
                onClick={this.toggleEpisodes}
                className="show-episodes button"
              >
                {episodesShown ? "Hide" : "Show"} Episodes
              </div>
            </div>
          </div>
        </div>
        {episodesShown && <EpisodesList episodesData={seasonEpisodes} />}
      </React.Fragment>
    );
  }
}
