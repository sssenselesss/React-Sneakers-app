import { NavLink } from "react-router-dom";
import { CartIcon, HeartItemIcon, OrderIcon } from "../Icons/Icons";

import Logo from "./Logo/Logo";

const CartButton = () => {
  return (
    <button>
      <CartIcon size={24} /> <span>1205 руб.</span>
    </button>
  );
};
const Header = () => {
  return (
    <header className="header">
      <Logo />

      <nav>
        <CartButton />
        <NavLink to={"/favorites"}>
          <HeartItemIcon />
        </NavLink>
        <NavLink to={"/orders"}>
          <OrderIcon />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
