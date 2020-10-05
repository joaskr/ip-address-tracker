import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import { InfoElement } from "./components/InfoElement";

function App() {
  const API =
    "https://geo.ipify.org/api/v1?apiKey=at_ZaQLoSjqpCLPfv7k2bgEdNjefcGsh&ipAddress=";
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
  }, [ip]);

  if (ipData === false) {
    return <h1>Ustalam adres IP...</h1>;
  } else {
    return (
      <div className="App">
        <header>
          <h1>IP Address Tracker</h1>
        </header>
        <main>
          <SearchBar onSearch={setIpFunc} />
          <div>
            <InfoElement elementName="Ip address" elmentData={ipData.ip} />
            <InfoElement
              elementName="Location address"
              elmentData={`${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`}
            />
            <InfoElement elementName="Timezone" elmentData={ipData.ip} />
            <InfoElement elementName="Isp" elmentData={ipData.isp} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
