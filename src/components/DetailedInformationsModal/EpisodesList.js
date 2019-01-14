import React from "react";
import PropTypes from "prop-types";

import { BackgroundImageElement } from "../BackgroundImageElement";
import { runtimeConvertor } from "../../helperFunctions/runtimeConvertor";

export const EpisodesList = ({ episodesData }) => (
  <ul className="episodes">
    {episodesData.map(episode => {
      const episodeTitle = episode.name
        ? episode.name
        : `Episode ${episode.number}`;
      const runtime = runtimeConvertor(episode.runtime);
      return (
        <li className="episode" key={episode.id}>
          <a href={episode.url}>
            <BackgroundImageElement
              extraClasses="top-content"
              imageObject={episode.image}
            >
              <div className="fade-effect" />
              <div className="basic-infos">
                <h2 className="episode-title">{episodeTitle}</h2>
                <p className="runtime">{runtime}</p>
              </div>
            </BackgroundImageElement>
            <div className="bottom-content">
              <div
                className="episode-description"
                dangerouslySetInnerHTML={{
                  __html: episode.summary || "No summary provided."
                }}
              />
              <div className="episode-number">{episode.number}</div>
            </div>
          </a>
        </li>
      );
    })}
  </ul>
);

EpisodesList.propTypes = {
  episodesData: PropTypes.array.isRequired
};
