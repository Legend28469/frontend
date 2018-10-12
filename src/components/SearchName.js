import React from "react";
import "./searchbox.css";

const SearchBox = nameSearchChange => {
  return (
    <div className="search-box">
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Seach by name"
          onChange={nameSearchChange.nameSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
