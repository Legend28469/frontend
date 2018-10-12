import React, { Component } from "react";
import RobotList from "./components/RobotList";
import Scroll from "./components/Scroll";

class App extends Component {
  state = {
    robots: [],
    nameSearchField: "",
    tagSearchField: ""
  };

  componentDidMount() {
    fetch("https://www.hatchways.io/api/assessment/students")
      .then(response => response.json())
      .then(robots => {
        const data = robots.students;
        for (let i = 0; i < data.length; i++) {
          data[i].tags = [];
        }
        this.setState({ robots: data });
      });
  }

  nameSearchChange = e => {
    this.setState({ nameSearchField: e.target.value });
  };

  tagSearchChange = e => {
    this.setState({ tagSearchField: e.target.value });
  };

  submitHandler = (clear, id, tag, e) => {
    e.preventDefault();
    const robots = [...this.state.robots];
    const index = robots.findIndex(x => x.id === id);
    robots[index].tags.push(tag);
    this.setState({ robots });
  };

  render() {
    const { robots, nameSearchField, tagSearchField } = this.state;

    const filteredRobots = robots.filter(robot => {
      const robotName = `${robot.firstName.toLowerCase()} ${robot.lastName.toLowerCase()}`;

      return (
        robot.firstName.toLowerCase().includes(nameSearchField.toLowerCase()) ||
        robot.lastName.toLowerCase().includes(nameSearchField.toLowerCase()) ||
        robotName.includes(nameSearchField.toLowerCase())
      );
    });

    return (
      <div className="App">
        <Scroll
          nameSearchChange={this.nameSearchChange}
          tagSearchChange={this.tagSearchChange}
        >
          <RobotList
            robots={filteredRobots}
            submitHandler={this.submitHandler}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;
