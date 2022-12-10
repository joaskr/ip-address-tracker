import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, ip }) => {
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
    const ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
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
      <form className="searchBarForm">
        <label htmlFor="ip" className="visually-hidden">
          Ip address
        </label>
        <input
          className={error ? "error searchBarInput" : "searchBarInput"}
          type="text"
          id="ip"
          placeholder={ip}
          value={searchedIp}
          onChange={(e) => setSearchedIp(e.target.value)}
        ></input>
        <button
          onClick={handleSubmit}
          className="searchBarButton"
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
      {error && <div className="message">{error}</div>}
    </div>
  );
};
export default SearchBar;

