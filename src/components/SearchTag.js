import React from "react";
import "./searchbox.css";

const SearchBox = tagSearchChange => {
  return (
    <div className="search-box">
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Seach by tag"
          onChange={tagSearchChange.tagSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
