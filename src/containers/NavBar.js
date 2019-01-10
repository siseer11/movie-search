import React from "react";
import { LogoIcon, SearchIcon } from "../components/Svgs";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default class NavBar extends React.Component {
  state = {
    showSearchInput: false
  };

  //When triggered, it change the state of show to true/false
  //and the search input will be rendered or removed
  toggleSearchInput = () => {
    this.setState(prevState => ({
      showSearchInput: !prevState.showSearchInput
    }));
  };

  render() {
    const { showSearchInput } = this.state;
    const { history } = this.props;
    return (
      <div className="nav-bar">
        <div className="left-content">
          <Link to="/home">
            <LogoIcon />
          </Link>
        </div>
        <div className="right-content" onClick={this.toggleSearchInput}>
          <SearchIcon />
        </div>
        <SearchForm
          closeForm={this.toggleSearchInput}
          visible={showSearchInput}
          history={history}
        />
      </div>
    );
  }
}
