import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

export default class SearchForm extends React.Component {
  static propTypes = {
    closeForm: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    searchedFor: ""
  };

  //Update the state, so the input changes each time
  //the user types
  changeHandler = e => {
    this.setState({
      searchedFor: e.target.value
    });
  };

  //When the user will move away from the input, and the input is empty
  //close it
  inputUnfocused = e => {
    if (this.state.searchedFor === "") {
      this.props.closeForm();
    }
  };

  //Helper method that cleans the input value
  cleanInput = () => {
    this.setState({
      searchedFor: ""
    });
  };

  //When the user submits the search form, prevent the default behaviour
  //and search for his movie
  submitHandler = e => {
    e.preventDefault();
    this.props.closeForm();
    this.cleanInput();
    //Redirect to the search page, where we will display
    //the results
    this.props.history.push(`/search/${this.state.searchedFor}`);
  };

  render() {
    const { searchedFor } = this.state;
    const { visible } = this.props;
    return (
      <CSSTransition
        in={visible}
        appear={false}
        timeout={400}
        classNames="zzzz"
        onEntered={() => {
          this.searchInput.focus();
        }}
      >
        {state => (
          <div className="form-wrapper">
            <form className="search-form" onSubmit={this.submitHandler}>
              <input
                className="search-input"
                type="text"
                value={searchedFor}
                onChange={this.changeHandler}
                onBlur={this.inputUnfocused}
                ref={node => (this.searchInput = node)}
              />
              <input className="submit-input" type="submit" value="Search" />
            </form>
          </div>
        )}
      </CSSTransition>
    );
  }
}
