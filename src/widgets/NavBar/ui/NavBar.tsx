import React from "react";
import cls from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { Search } from "features/ui";

export const NavBar = () => {
  return (
    <div className={cls.navBar}>
      <Link to={"/"}>Home</Link>
      <Link to={"/cast"}>Cast</Link>
      <Link to={"/characters"}>Characters</Link>
      <Link to={"/info"}>Info</Link>
      <Link to={"/episodes"}>Episodes</Link>
      <Link to={"/inventory"}>Inventory</Link>
      <Search />
    </div>
  );
};
