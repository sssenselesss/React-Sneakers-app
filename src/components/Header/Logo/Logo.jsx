import { NavLink } from "react-router-dom";
import logo from "./../../../assets/logo.png";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <div className="logo">
        <img src={logo} alt="React Sneakers" width={40} height={40} />
        <div>
          <h1>React Sneakers</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;
