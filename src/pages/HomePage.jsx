import { NavLink } from "react-router-dom";
import {
  HeartItemIcon,
  NextIcon,
  PlusItemIcon,
  PrevIcon,
  SearchItemicon,
} from "../components/Icons/Icons";
import Product from "../components/Product/Product";

import banner from "./../assets/banner.png";

const HomePage = () => {
  return (
    <>
      <section className="slider">
        <div className="wrapper">
          <div className="slides">
            <div
              className="slide"
              style={{
                backgroundColor: "#f4efe9",
              }}
            >
              <div className="slide__left">
                <h2>Stan Smith, Forever</h2>
                <NavLink className="button xl" to={"/"}>
                  Купить
                </NavLink>
              </div>
              <div className="slide__right">
                <img src={banner} alt="Stan Smith" />
              </div>
            </div>
          </div>
          <div className="control">
            <button className="prev">
              <PrevIcon />
            </button>
            <button className="next">
              <NextIcon size={28} />
            </button>
          </div>
        </div>
      </section>

      <section className="section catalog">
        <header className="section-header">
          <h2 className="section__title">Все кроссовки</h2>

          <div className="search-box">
            <div>
              <SearchItemicon size={20} />
            </div>
            <input type="text" placeholder="Поиск..." />
          </div>
        </header>

        <div className="products">
          <Product />
        </div>
      </section>
    </>
  );
};

export default HomePage;
