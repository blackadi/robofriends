import { Component } from "react";
import { connect } from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "../css/App.css";

import { setSearchField, requestRobots } from "../actions/actions";

class App extends Component {

  componentDidMount() {
    this.props.requestRobots();
  }

  loading() {
    return (
      <article class="vh-100 dt w-100">
      <div class="dtc v-mid tc white ph3 ph4-l">
        <h1 class="f6 f2-m f-subheadline-l fw6 tc">Loading...</h1>
        <div class="ui active massive centered inline loader"></div>
      </div>
    </article>
    

    );
  }

  render() {
    const { searchField, setSearchField, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return isPending ? (
      <div>{this.loading()}</div>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={(event) => setSearchField(event.target.value)} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestReducers.robots,
    isPending: state.requestReducers.isPending,
    error: state.requestReducers.error
  };
};

export default connect(mapStateToProps, {requestRobots, setSearchField})(App);
