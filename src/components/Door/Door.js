import "./Door.css";
import React from "react";

export default function Door({ position, onClick }) {
  return (
    <div className="door-container" position={position} onClick={onClick}>
      <div className="board">
        <ellipse className="doorknob"></ellipse>
        <div className="pattern p1"></div>
        <div className="pattern p2"></div>
        <div className="pattern p3"></div>
        <div className="pattern p4"></div>
        <div className="pattern p5"></div>
        <div className="pattern p6"></div>
      </div>
    </div>
  );
}
