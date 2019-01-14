import React from "react";
import PropTypes from "prop-types";

import Season from "../../containers/Season";

/*
 * Here we will get all the data about the seasons and
 * episodes, the episodes are all in one big object so we will split them on
 * specific seasons
 */

export const Seasons = ({ seasonsData, episodesData }) => {
  //We sort the episodes in arrays, so each index will corespond
  //to a season
  const episodesBySeason = episodesData.reduce((acc, val) => {
    if (!acc[val.season - 1]) {
      acc.push([]);
    }
    acc[val.season - 1].push(val);
    return acc;
  }, []);

  return (
    <div className="seasons">
      <h2 className="section-title">Seasons</h2>
      {seasonsData.map(season => (
        <Season
          key={season.id}
          seasonData={season}
          seasonEpisodes={episodesBySeason[season.number - 1]}
        />
      ))}
    </div>
  );
};

Seasons.propTypes = {
  seasonsData: PropTypes.array.isRequired,
  episodesData: PropTypes.array.isRequired
};
