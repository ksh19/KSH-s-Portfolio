import "./Room.css";
import React from "react";
import Furniture from "./Furniture/Furniture.js";
import Door from "../Door/Door.js"
import Header from "../Header/Header.js";
export default function Room({ onExit }) {
  return (
    <>
      <Header/>
      <div className="room">
        {/* 가구 배치 */}
        <Door onClick={onExit}/>
        <Furniture />
      </div>
    </>
  );
}
