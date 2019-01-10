import React from "react";
import ReactDOM from "react-dom";
import { ArrowIcon, HeartIcon, StarIcon } from "../components/Svgs";
import { runtimeConvertor } from "../helperFunctions/runtimeConvertor";

const modalRoot = document.getElementById("modal-root");
const body = document.querySelector("body");

const show = {
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
};

export default class DetailedInformationsModal extends React.Component {
  root = document.createElement("div");

  componentDidMount = () => {
    //Apend the modal to the page
    modalRoot.appendChild(this.root);
    //Make sure that the scroll-bar for the body is hidden
    body.style.overflow = "hidden";
  };

  componentWillUnmount = () => {
    //Remove the modal from the page
    modalRoot.removeChild(this.root);
    //Reset the body overflow, so we can scroll again
    body.style.overflow = "unset";
  };

  render() {
    return ReactDOM.createPortal(<Details />, this.root);
  }
}

const episodes = [
  {
    id: 1,
    url: "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
    name: "Pilot",
    season: 1,
    number: 1,
    airdate: "2013-06-24",
    airtime: "22:00",
    airstamp: "2013-06-25T03:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
    },
    summary:
      "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/1"
      }
    }
  },
  {
    id: 2,
    url: "http://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire",
    name: "The Fire",
    season: 1,
    number: 2,
    airdate: "2013-07-01",
    airtime: "22:00",
    airstamp: "2013-07-02T03:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg"
    },
    summary:
      "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/2"
      }
    }
  },
  {
    id: 3,
    url: "http://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt",
    name: "Manhunt",
    season: 1,
    number: 3,
    airdate: "2013-07-08",
    airtime: "22:00",
    airstamp: "2013-07-09T03:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg"
    },
    summary:
      "<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/3"
      }
    }
  },
  {
    id: 4,
    url: "http://www.tvmaze.com/episodes/4/under-the-dome-1x04-outbreak",
    name: "Outbreak",
    season: 1,
    number: 4,
    airdate: "2013-07-15",
    airtime: "22:00",
    airstamp: "2013-07-16T03:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4391.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4391.jpg"
    },
    summary:
      "<p>The people of Chester's Mill fall into a state of panic as an outbreak of meningitis strikes their community, threatening their already depleted medical supplies. Meanwhile, Julia continues to search for answers into her husband's disappearance.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/4"
      }
    }
  },
  {
    id: 5,
    url: "http://www.tvmaze.com/episodes/5/under-the-dome-1x05-blue-on-blue",
    name: "Blue on Blue",
    season: 1,
    number: 5,
    airdate: "2013-07-22",
    airtime: "22:00",
    airstamp: "2013-07-23T03:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/1/4392.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg"
    },
    summary:
      "<p>The Chester's Mill residents receive an unexpected visit from their loved ones on the other side. Meanwhile, the community braces for a threat from outside the Dome.</p>",
    _links: {
      self: {
        href: "http://api.tvmaze.com/episodes/5"
      }
    }
  }
];

const Details = () => (
  <div className="details-modal">
    <div
      className="top-banner"
      style={{
        backgroundImage:
          'url("http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg")'
      }}
    >
      <div className="buttons">
        <div className="back-button">
          <ArrowIcon />
        </div>
        <div className="like-button">
          <HeartIcon />
        </div>
      </div>
      <div className="fade-effect" />
    </div>
    <div className="details-content">
      <div className="top-short-infos">
        <div
          className="left movie-poster"
          style={{
            backgroundImage:
              'url("http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg")'
          }}
        />
        <div className="right">
          <h2 className="movie-title">{show.name}</h2>
          <p className="runtime">1h 30min</p>
          <p className="genres">Action/Drama</p>
          <div className="rating">
            <p>Rating</p>
            <div className="right-rating">
              <StarIcon />
              <p>9.5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <h2 className="section-title">Summary</h2>
        <div
          className="summary-text"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
      </div>
      <div className="cast">
        <h2 className="section-title">Cast</h2>
      </div>
      <div className="about-table">
        <h2 className="section-title">About</h2>
        <table>
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
      <div className="seasons">
        <h2 className="section-title">Seasons</h2>
        <div className="season-data">
          <div class="top-content">
            <div
              class="season-poster"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
              }}
            />
            <div className="right-content">
              <div className="season-table-details">
                <table>
                  <tr>
                    <th className="left-content">Title:</th>
                    <th className="right-content">Season 1</th>
                  </tr>
                  <tr>
                    <th className="left-content">Episodes:</th>
                    <th className="right-content">21</th>
                  </tr>
                  <tr>
                    <th className="left-content">Premiere:</th>
                    <th className="right-content">2015-05-01</th>
                  </tr>
                  <tr>
                    <th className="left-content">End date:</th>
                    <th className="right-content">Not finished</th>
                  </tr>
                </table>
              </div>
              <div className="show-episodes button">Show Episodes</div>
            </div>
          </div>
        </div>
        <div className="season-data">
          <div className="top-content">
            <div
              class="season-poster"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
              }}
            />
            <div className="right-content">
              <div className="season-table-details">
                <table>
                  <tr>
                    <th className="left-content">Title:</th>
                    <th className="right-content">Season 1</th>
                  </tr>
                  <tr>
                    <th className="left-content">Episodes:</th>
                    <th className="right-content">21</th>
                  </tr>
                  <tr>
                    <th className="left-content">Premiere:</th>
                    <th className="right-content">2015-05-01</th>
                  </tr>
                  <tr>
                    <th className="left-content">End date:</th>
                    <th className="right-content">Not finished</th>
                  </tr>
                </table>
              </div>
              <div className="show-episodes button">Hide Episodes</div>
            </div>
          </div>
          <Episodes episodesData={episodes} />
        </div>
      </div>
      <div class="button add-to-favorite">Add to favorite</div>
    </div>
  </div>
);

const Episodes = ({ episodesData }) => (
  <ul className="episodes">
    {episodesData.map(episode => {
      const episodePoster = episode.image
        ? episode.image.medium
        : "http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg";
      const episodeTitle = episode.name
        ? episode.name
        : `Episode ${episode.number}`;
      const runtime = runtimeConvertor(episode.runtime);
      return (
        <li className="episode" key={episode.id}>
          <a href={episode.url}>
            <div
              className="top-content"
              style={{ backgroundImage: `url(${episodePoster})` }}
            >
              <div className="fade-effect" />
              <div className="basic-infos">
                <h2 className="episode-title">{episodeTitle}</h2>
                <p className="runtime">{runtime}</p>
              </div>
            </div>
            <div className="bottom-content">
              <div
                className="episode-description"
                dangerouslySetInnerHTML={{ __html: episode.summary }}
              />
              <div className="episode-number">{episode.number}</div>
            </div>
          </a>
        </li>
      );
    })}
  </ul>
);
