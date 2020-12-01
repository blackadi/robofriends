import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "../robots";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: robots, searchField: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
