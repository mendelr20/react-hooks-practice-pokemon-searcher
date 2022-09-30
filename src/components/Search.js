import React from "react";

function Search({searchBy, onChangeSearch}) {

  function handleChange(e) {
    onChangeSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchBy} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
