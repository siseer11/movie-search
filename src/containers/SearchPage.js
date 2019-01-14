import React from "react";

import { AppContext } from "../AppContext";
import { DetailedMoviesList } from "../components/DetailedMoviesList";

export default class SearchPage extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ toggleDetailedMovieModal }) => (
          <React.Fragment>
            <div className="search-results-section">
              <h2 className="section-title">Search Results</h2>
              {moviesData ? (
                <DetailedMoviesList
                  moviesData={moviesData}
                  toggleDetailedMovieModal={toggleDetailedMovieModal}
                />
              ) : (
                <div className="no-search-results">No search results</div>
              )}
            </div>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

var moviesData = [
  {
    score: 13.498132,
    show: {
      id: 334,
      url: "http://www.tvmaze.com/shows/334/drunk-history",
      name: "Drunk History",
      type: "Variety",
      language: "English",
      genres: ["Comedy"],
      status: "Running",
      runtime: 30,
      premiered: "2013-07-09",
      officialSite: "http://www.cc.com/shows/drunk-history",
      schedule: {
        time: "22:00",
        days: ["Tuesday"]
      },
      rating: {
        average: 6.3
      },
      weight: 89,
      network: {
        id: 23,
        name: "Comedy Central",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 36291,
        thetvdb: 270550,
        imdb: "tt2712612"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/147/369352.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/147/369352.jpg"
      },
      summary:
        "<p>Based on the popular web series, <b>Drunk History</b> is the liquored-up narration of our nation's history. Host Derek Waters, along with an ever-changing cast of actors and comedians, travels across the country to present the rich tales that every city in this land has to offer. Booze helps bring out the truth. It's just that sometimes the truth is a little incoherent.</p>",
      updated: 1547044691,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/334"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1485500"
        },
        nextepisode: {
          href: "http://api.tvmaze.com/episodes/1565106"
        }
      }
    }
  },
  {
    score: 13.081142,
    show: {
      id: 13863,
      url: "http://www.tvmaze.com/shows/13863/secret-history",
      name: "Secret History",
      type: "Documentary",
      language: "English",
      genres: ["History"],
      status: "Running",
      runtime: 60,
      premiered: "1991-11-14",
      officialSite:
        "http://www.channel4.com/programmes/the-dambusters-great-escape-secret-history",
      schedule: {
        time: "",
        days: ["Sunday"]
      },
      rating: {
        average: null
      },
      weight: 0,
      network: {
        id: 45,
        name: "Channel 4",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London"
        }
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: 189431,
        imdb: "tt1397131"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/47/119184.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/47/119184.jpg"
      },
      summary:
        "<p><b>Secret History</b> is a long-running documentary series that originally ran on British television. Using a combination of interviews and archival footage, the show re-examines key historical moments of international events, often utilizing little-known and previously suppressed information. In 1992, the show won the Royal Television Society award for Best Documentary Series.</p>",
      updated: 1530882975,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/13863"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1445778"
        }
      }
    }
  },
  {
    score: 12.964049,
    show: {
      id: 6504,
      url: "http://www.tvmaze.com/shows/6504/drunk-history",
      name: "Drunk History",
      type: "Variety",
      language: "English",
      genres: ["Comedy", "History"],
      status: "Ended",
      runtime: 30,
      premiered: "2015-01-12",
      officialSite: "http://www.comedycentral.co.uk/drunk-history",
      schedule: {
        time: "22:00",
        days: ["Wednesday"]
      },
      rating: {
        average: 8.2
      },
      weight: 78,
      network: {
        id: 309,
        name: "Comedy Central",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 47352,
        thetvdb: 290572,
        imdb: null
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/24/61904.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/24/61904.jpg"
      },
      summary:
        "<p>Jimmy Carr narrates a series based on the popular US format in which top comedians tell classic historical stories whilst drunk. As the stories are told, a famous ensemble cast re-enact the tales.</p>",
      updated: 1547340613,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/6504"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1155243"
        }
      }
    }
  },
  {
    score: 12.668937,
    show: {
      id: 13638,
      url: "http://www.tvmaze.com/shows/13638/making-history",
      name: "Making History",
      type: "Scripted",
      language: "English",
      genres: ["Comedy", "Adventure", "Science-Fiction"],
      status: "Ended",
      runtime: 30,
      premiered: "2017-03-05",
      officialSite: "http://www.fox.com/making-history",
      schedule: {
        time: "20:30",
        days: ["Sunday"]
      },
      rating: {
        average: 5.9
      },
      weight: 79,
      network: {
        id: 4,
        name: "FOX",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: 311833,
        imdb: "tt5515410"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/155/389842.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/155/389842.jpg"
      },
      summary:
        "<p><b>Making History</b> follows three friends from two different centuries as they try to balance the thrill of time travel with the mundane concerns of their present-day lives. Two shows in one, it's both a rollicking historical adventure, and a contemporary comedy about love, friendship and trying to fit in to an increasingly complex and impersonal world.</p><p>Dan Chambers, a computer science professor at a small Massachusetts college, recently discovered time travel and has been transporting himself back to the 1700s to spend time with the colonial woman he's fallen for. In the present, Dan is an unpopular nerd. But by claiming song lyrics, lines from movies and stand-up bits as his own in the 18th century, he's absolutely hilarious - he gets the girl and makes friends. But Dan's actions in the past are messing up the present. That woman he's dating is not just any woman. She's Paul Revere's daughter, Deborah, and Dan's meddling in the past causes her father to delay his famous ride, which may have altered the outcome of the entire American Revolution. To set matters right, Dan enlists the help of his colleague, Chris Parish, a brilliant, polished and popular history professor, who's now given the incredible opportunity to actually live the history he teaches. Can Dan, Chris and Deborah save America as we know it? Can a woman from 1775 adapt to life in 2016? Can the three intrepid time travelers improve the past, help the helpless, fight for justice and get rich?</p>",
      updated: 1542440513,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/13638"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1158176"
        }
      }
    }
  },
  {
    score: 12.099264,
    show: {
      id: 39136,
      url: "http://www.tvmaze.com/shows/39136/future-history",
      name: "Future History",
      type: "Documentary",
      language: "English",
      genres: [],
      status: "Running",
      runtime: 30,
      premiered: "2018-11-13",
      officialSite: "https://futurehistorytv.ca/",
      schedule: {
        time: "19:30",
        days: ["Tuesday"]
      },
      rating: {
        average: null
      },
      weight: 36,
      network: {
        id: 792,
        name: "Aboriginal Peoples Television Network",
        country: {
          name: "Canada",
          code: "CA",
          timezone: "America/Halifax"
        }
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: "tt6853214"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/171/429288.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/171/429288.jpg"
      },
      summary:
        "<p><b>Future History</b> celebrates the reclamation and revitalization of Indigenous knowledge. It explores the diverse perspectives and knowledge within the Indigenous community to create a deeper understanding about a shared history, while looking forward to a brighter future. Hosts Kris Nahrgang and Sarain Fox seeks out those who are harnessing Indigenous knowledge to gain a deeper understanding of what it means to have an Indigenous world view.</p>",
      updated: 1542175981,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/39136"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1547885"
        }
      }
    }
  },
  {
    score: 11.163884,
    show: {
      id: 4547,
      url: "http://www.tvmaze.com/shows/4547/big-history",
      name: "Big History",
      type: "Documentary",
      language: "English",
      genres: ["History"],
      status: "Ended",
      runtime: 30,
      premiered: "2013-11-02",
      officialSite: null,
      schedule: {
        time: "22:00",
        days: ["Saturday"]
      },
      rating: {
        average: null
      },
      weight: 0,
      network: {
        id: 53,
        name: "History",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 38672,
        thetvdb: 274939,
        imdb: "tt3250010"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/20/52123.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/20/52123.jpg"
      },
      summary:
        "<p>Each episode of <b>Big History</b> will begin with an iconic topic from the pages of traditional history such as the Great Pyramids, The Titanic or the American Revolution but then will spin into surprising journeys through other fields, weaving together insights and evidence from various disciplines such as astronomy, physics, chemistry, biology, anthropology, history and economics. Spanning 13.7 billion years, Big History will ultimately pull together the puzzle pieces from all 16 half-hour episodes into an epic two-hour finale, creating one grand narrative and revealing the unifying link among all events.</p>",
      updated: 1477343202,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/4547"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/293711"
        }
      }
    }
  },
  {
    score: 11.116973,
    show: {
      id: 4112,
      url: "http://www.tvmaze.com/shows/4112/forbidden-history",
      name: "Forbidden History",
      type: "Documentary",
      language: "English",
      genres: ["History"],
      status: "Running",
      runtime: 60,
      premiered: "2013-09-27",
      officialSite: "http://yesterday.uktv.co.uk/shows/forbidden-history/",
      schedule: {
        time: "20:00",
        days: ["Thursday"]
      },
      rating: {
        average: null
      },
      weight: 77,
      network: {
        id: 345,
        name: "Yesterday",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London"
        }
      },
      webChannel: null,
      externals: {
        tvrage: 37649,
        thetvdb: 274486,
        imdb: "tt4192786"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/19/49920.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/19/49920.jpg"
      },
      summary:
        "<p>Jamie Theakston's Forbidden History uncovers the truth behind great myths, conspiracy theories, ancient treasures, lost civilisations and war time secrets.</p>",
      updated: 1544410006,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/4112"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1498564"
        }
      }
    }
  },
  {
    score: 11.100042,
    show: {
      id: 40226,
      url: "http://www.tvmaze.com/shows/40226/extra-history",
      name: "Extra History",
      type: "Documentary",
      language: "English",
      genres: [],
      status: "Running",
      runtime: 10,
      premiered: "2013-09-06",
      officialSite: "https://becausegamesmatter.com/",
      schedule: {
        time: "",
        days: ["Saturday"]
      },
      rating: {
        average: null
      },
      weight: 42,
      network: null,
      webChannel: {
        id: 21,
        name: "YouTube",
        country: null
      },
      externals: {
        tvrage: null,
        thetvdb: 294916,
        imdb: null
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/178/447134.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/178/447134.jpg"
      },
      summary: null,
      updated: 1547387830,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/40226"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1590406"
        }
      }
    }
  },
  {
    score: 10.957578,
    show: {
      id: 39230,
      url: "http://www.tvmaze.com/shows/39230/family-history",
      name: "Family History",
      type: "Scripted",
      language: "English",
      genres: ["Drama"],
      status: "In Development",
      runtime: 60,
      premiered: null,
      officialSite: null,
      schedule: {
        time: "",
        days: []
      },
      rating: {
        average: null
      },
      weight: 0,
      network: {
        id: 3,
        name: "ABC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: null
      },
      image: null,
      summary:
        "<p><strong>Family History</strong> is inspired by the recent explosion in genetic genealogy testing. It \nfollows a young tech reporter in the Bay area whose life changes when \nshe discovers a family secret via a DNA-testing web site. The show \nexplores nature versus nurture and how technology has caught up to our \nsecrets. We may be the last generation to have secrets.</p>",
      updated: 1540228870,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/39230"
        }
      }
    }
  },
  {
    score: 10.548684,
    show: {
      id: 18655,
      url: "http://www.tvmaze.com/shows/18655/the-history-of-comedy",
      name: "The History of Comedy",
      type: "Documentary",
      language: "English",
      genres: ["Comedy", "History"],
      status: "Running",
      runtime: 60,
      premiered: "2017-02-09",
      officialSite: "http://www.cnn.com/shows/history-of-comedy",
      schedule: {
        time: "22:00",
        days: ["Sunday"]
      },
      rating: {
        average: 9.4
      },
      weight: 65,
      network: {
        id: 40,
        name: "CNN",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York"
        }
      },
      webChannel: null,
      externals: {
        tvrage: null,
        thetvdb: null,
        imdb: "tt5737466"
      },
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_portrait/137/344729.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/137/344729.jpg"
      },
      summary:
        "<p><b>The History of Comedy</b> explores what makes people laugh – from the Ancient Greeks, to Shakespeare, Vaudeville, to the biggest contemporary comedians, movies and TV shows. It digs deep into topics like political humor and slapstick, featuring the voices that have made us laugh over the generations. Using archival footage, original comedic material, interviews with comedy legends and luminaries, the series showcase how the art form has evolved over the years.</p>",
      updated: 1544100763,
      _links: {
        self: {
          href: "http://api.tvmaze.com/shows/18655"
        },
        previousepisode: {
          href: "http://api.tvmaze.com/episodes/1505997"
        }
      }
    }
  }
];
