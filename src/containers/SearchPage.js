import React from "react";
import { descriptionShortner } from "../helperFunctions/descriptionShortner";

import DetailedInformationsModal from "./DetailedInformationsModal";
import { StarIcon } from "../components/Svgs";

const shows = [
  {
    id: 1586437,
    url:
      "http://www.tvmaze.com/episodes/1586437/abby-hatcher-1x11-hair-flair-fuzzly",
    name: "Counting Cars",
    summary:
      '<p>Most people in Las Vegas bet with chips, but Danny "The Count" Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count\'s Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>',
    rating: {
      average: 8.6
    },
    runtime: 65,
    image: {
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg"
    }
  },
  {
    id: 8110,
    url:
      "http://www.tvmaze.com/episodes/1586437/abby-hatcher-1x11-hair-flair-fuzzly",
    name: "Z Cars",
    runtime: 30,
    summary:
      '<p><b>Z Cars</b> or <i>Z-Cars</i> was a British television drama series centred on the work of mobile uniformed police in the fictional town of Newtown, based on Kirkby, Merseyside. Produced by the BBC, it debuted in January 1962 and ran until September 1978.</p><p>The series differed sharply from earlier police procedurals. With its less-usual Northern setting, it injected a new element of harsh realism into the image of the police, which some found unwelcome.</p><p><i>Z Cars</i> ran for a total of 803 episodes, of which fewer than half have survived. Regular stars included Stratford Johns (Detective Inspector Barlow), Frank Windsor (Det. Sgt Watt), James Ellis (Bert Lynch) and Brian Blessed ("Fancy" Smith). Barlow and Watt were later spun into a separate series "Softly, Softly".</p><p>The name <i>Z Cars</i> relates to an imaginary "Z" Division of the local constabulary. The theme tune was based on a traditional Liverpool folk song, and was adopted by Everton Football Club as its official anthem.</p>',
    rating: {
      average: null
    },
    image: {
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/29/73773.jpg"
    }
  },
  {
    id: 40158,
    url:
      "http://www.tvmaze.com/episodes/1586437/abby-hatcher-1x11-hair-flair-fuzzly",
    name: "Mystery Cars",
    image: null,
    summary:
      "<p>In the 1950's, America had broken free from the shackles of wartime economics. It was walking with the swagger of a Nation that had the world by the tail. Scientists had harnessed nuclear energy. Jetpropelled airplanes were breaking speed records... and the race to space was on! But perhaps more than anything else, one thing melded imagination and consumerism, putting this era in perfect context: The concept car. Unlike satellites, rockets, and jet planes these dream cars were accessible. People flocked to auto shows like GM's Motorama to see the concept cars in their titanium bodied glory. They were snapshots of how America perceived its future. Jaw dropping, unforgettable but what happened then? Most were destroyed. Some just plain vanished. But amazingly, some are still here and new series Mystery Cars is on a mission to find them.</p>",
    rating: {
      average: 5.2
    },
    runtime: 45,
    image: null
  }
];

export default class SearchPage extends React.Component {
  render() {
    return (
      <div className="search-results-section">
        <DetailedInformationsModal />
        <h2 className="section-title">Search Results</h2>
        {shows ? (
          <ShowsList shows={shows} />
        ) : (
          <div className="no-search-results">No search results</div>
        )}
      </div>
    );
  }
}

const ShowsList = ({ shows }) => (
  <ul className="search-results-items">
    {shows.map(el => {
      //Show default poster if the API does not provide one
      const moviePoster = el.image
        ? el.image.original
        : "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

      const summary = descriptionShortner({ desc: el.summary, max: 250 });

      return (
        <li className="movie-card" key={el.id}>
          <div className="left-content">
            <div
              className="movie-poster"
              style={{ backgroundImage: `url(${moviePoster})` }}
            />
            <div
              className="blured-poster"
              style={{ backgroundImage: `url(${moviePoster})` }}
            />
          </div>
          <div className="right-content movie-basic-details">
            <div className="top-content">
              <h2 class="movie-title">{el.name}</h2>
              <div className="rating">
                <StarIcon />
                <p className="rating-number">
                  {el.rating.average ? el.rating.average : "N/A"}
                </p>
              </div>
            </div>
            <div className="summary">{summary}</div>
          </div>
        </li>
      );
    })}
  </ul>
);
