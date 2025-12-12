import "./Light.css";
import React from "react";

export default function Light() {
  return (
    <div className="light-container">
      <div className="light-wrapper">
        <div className="light-body"></div>
        <div class="light-outline"></div>
        <div className="light-bulb"></div>
        <div className="light-beam"></div>
      </div>
    </div>
  );
}
