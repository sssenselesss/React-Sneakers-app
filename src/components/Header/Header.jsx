import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModalContext } from "../../pages/Root";
import { CartIcon, HeartItemIcon, OrderIcon } from "../Icons/Icons";

import Logo from "./Logo/Logo";



const CartButton = () => {

  const {toggleModal} = useContext(ModalContext);
  return (
    <button onClick={toggleModal}>
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
