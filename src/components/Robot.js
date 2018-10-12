import React, { Component } from "react";
import AddTag from "./AddTag";
import "./robot.css";

class Robot extends React.Component {
  state = {
    expand: false
  };

  handleClick = e => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const {
      grades,
      pic,
      firstName,
      lastName,
      skill,
      email,
      company,
      tags,
      id
    } = this.props;

    let numbers = grades.map(numbers => parseInt(numbers, 10));
    const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

    return (
      <div
        className="robot"
        style={this.state.expand ? { height: "415px" } : null}
      >
        <img src={pic} alt="A robot" />
        <p>
          <span className="title big-text">
            {firstName} {lastName}
          </span>
          <br />
          Email: {email}
          <br />
          Company: {company}
          <br />
          Skill: {skill}
          <br />
          Average: {avg(numbers)}%
        </p>

        <div className="overflow">
          <p>
            Test 1: {grades[0]}
            <br />
            Test 2: {grades[1]}
            <br />
            Test 3: {grades[2]}
            <br />
            Test 4: {grades[3]}
            <br />
            Test 5: {grades[4]}
            <br />
            Test 6: {grades[5]}
            <br />
            Test 7: {grades[6]}
            <br />
            Test 8: {grades[7]}
          </p>
          <div className="tags">
            {tags.map((tag, index) => {
              return (
                <div className="button" key={index}>
                  {tag}
                </div>
              );
            })}
          </div>

          <AddTag submitHandler={this.props.submitHandler} id={id} />
        </div>

        <div className="expand" onClick={this.handleClick}>
          {this.state.expand ? <span>–</span> : <span>+</span>}
        </div>
      </div>
    );
  }
}

export default Robot;
