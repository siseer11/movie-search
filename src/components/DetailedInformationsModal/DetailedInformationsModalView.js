import React from "react";

import { TopBanner } from "./TopBanner";
import { TopShortInfos } from "./TopShortInfos";
import { ActorsHorizontalScroller } from "../ActorsHorizontalScroller";
import { Seasons } from "./Seasons";
import { TableData } from "./TableData";

export const DetailedInformationsModalView = ({ movieData, toggleModal }) => (
  <React.Fragment>
    <TopBanner imageObject={movieData.image} toggleModal={toggleModal} />
    <div className="details-content">
      <TopShortInfos movieData={movieData} />
      <div className="summary">
        <h2 className="section-title">Summary</h2>
        <div
          className="summary-text"
          dangerouslySetInnerHTML={{
            __html: movieData.summary || "No summary provided for this show."
          }}
        />
      </div>
      {movieData._embedded.cast.length > 0 && (
        <div className="cast recommended-actors">
          <h2 className="section-title">Cast</h2>
          <ActorsHorizontalScroller actorsData={movieData._embedded.cast} />
        </div>
      )}
      <div className="about-table">
        <h2 className="section-title">About</h2>
        <TableData
          seasonData={{
            Title: movieData.name || `Season ${movieData.number}`,
            Type: movieData.genres.join("/"),
            Production: (movieData.network || { name: "" }).name,
            Language: movieData.language,
            Premiere: movieData.premiered,
            Seasons: movieData._embedded.seasons.length,
            Episodes: movieData._embedded.episodes.length,
            Status: movieData.status
          }}
        />
      </div>
      {movieData._embedded.seasons && (
        <Seasons
          seasonsData={movieData._embedded.seasons}
          episodesData={movieData._embedded.episodes}
        />
      )}
      <div className="button add-to-favorite">Add to favorite</div>
    </div>
  </React.Fragment>
);

/*

  
  
    <tr>
      <th className="left-content">Title:</th>
      <th className="right-content">The Custom Cars</th>
    </tr>
    <tr>
      <th className="left-content">Type:</th>
      <th className="right-content">Action/Fake/TV-show</th>
    </tr>
    <tr>
      <th className="left-content">Production:</th>
      <th className="right-content">BBC</th>
    </tr>
    <tr>
      <th className="left-content">Premiere:</th>
      <th className="right-content">2018-05-01</th>
    </tr>
    <tr>
      <th className="left-content">Seasons:</th>
      <th className="right-content">5</th>
    </tr>
  </table>
</div>
*/
