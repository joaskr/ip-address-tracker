import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchedIp, setSearchedIp] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      onSearch(searchedIp);
    } else {
      return;
    }
  };

  const validate = () => {
    let valid = true;
    const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (searchedIp.match(ipformat)) {
      setError(null);
    } else {
      setError("Invalid IP address");
      return false;
    }
    return valid;
  };

  return (
    <div className="searchBar">
      <form>
        <input
          className="searchBarInput"
          type="text"
          placeholder="ip"
          value={searchedIp}
          onChange={(e) => setSearchedIp(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>
          <img src={require("../images/icon-arrow.svg")} alt="arrow" />
        </button>
      </form>
      {error && <div className="message">{error}</div>}
    </div>
  );
};
export default SearchBar;
