import React from "react";
import Robot from "./Robot";

const RobotList = ({ robots, submitHandler }) => {
  return (
    <div>
      {robots.map(robot => {
        return (
          <Robot
            submitHandler={submitHandler}
            key={robot.id}
            city={robot.city}
            company={robot.company}
            email={robot.email}
            firstName={robot.firstName}
            grades={robot.grades}
            id={robot.id}
            lastName={robot.lastName}
            pic={robot.pic}
            skill={robot.skill}
            tags={robot.tags}
          />
        );
      })}
    </div>
  );
};

export default RobotList;
