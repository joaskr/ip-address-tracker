import React from "react";
import "./InfoElement.css";

const InfoElement = ({ elementName, elmentData }) => {
  return (
    <div className="ipInfo infoElement">
      <p className="infoName">{elementName}</p>
      <p className="infoData">{elmentData}</p>
    </div>
  );
};

export default InfoElement;
