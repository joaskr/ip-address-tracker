import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/search-bar/SearchBar";
import InfoElement from "./components/info-element/InfoElement";
import MapComponent from "./components/map-component/MapComponent";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=`;
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState(false);
  const setIpFunc = (ip) => {
    setIp(ip);
  };

  useEffect(() => {
    fetch(API + ip)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd sieci");
        }
      })
      .then((data) => {
        setIpData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ip, API]);

  return (
    <>
      <header className="header">
        <h1>IP Address Tracker</h1>
        <SearchBar onSearch={setIpFunc} ip={ipData.ip} />
        {ipData === false ? null : (
          <div className="info-container">
            <InfoElement elementName="Ip address" elmentData={ipData.ip} />
            <div className="separator"></div>
            <InfoElement
              elementName="Location"
              elmentData={`${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`}
            />
            <div className="separator"></div>
            <InfoElement
              elementName="Timezone"
              elmentData={ipData.location.timezone}
            />
            <div className="separator"></div>
            <InfoElement elementName="Isp" elmentData={ipData.isp} />
          </div>
        )}
      </header>
      <main>
        {ipData === false ? (
          <div className="lds-circle">
            <div></div>
            <p>Loading map...</p>
          </div>
        ) : (
          <div className="main-container">
            <MapComponent
              lat={ipData.location.lat}
              lng={ipData.location.lng}
              city={ipData.location.city}
              className="map"
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;

