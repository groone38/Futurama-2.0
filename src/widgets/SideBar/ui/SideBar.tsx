import React from "react";
import cls from "./SideBar.module.scss";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className={cls.sideBar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/cast"}>Cast</Link>
      <Link to={"/characters"}>Characters</Link>
      <Link to={"/info"}>Info</Link>
      <Link to={"/episodes"}>Episodes</Link>
      <Link to={"/inventory"}>Inventory</Link>
    </div>
  );
};
