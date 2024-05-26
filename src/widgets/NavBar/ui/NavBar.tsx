import { Link } from "react-router-dom";
import cls from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={cls.navBar}>
      <Link to={"/cast"}>Cast</Link>
      <Link to={"/characters"}>Characters</Link>
      <Link to={"/info"}>Info</Link>
      <Link to={"/episodes"}>Episodes</Link>
      <Link to={"/inventory"}>Inventory</Link>
    </div>
  );
};
