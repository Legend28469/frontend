import React from "react";
import SearchName from "./SearchName";
import SearchTag from "./SearchTag";
import "./scroll.css";

const Scroll = props => {
  return (
    <div className="scroll" style={{ display: "flex" }}>
      <SearchName
        nameSearchChange={props.nameSearchChange}
        placeholder="Search by name"
      />

      <SearchTag
        tagSearchChange={props.tagSearchChange}
        placeholder="Search by tag"
      />
      <div className="scroller">{props.children}</div>
    </div>
  );
};

export default Scroll;
