import { NavLink } from "react-router-dom";
import { SearchItemicon } from "../components/Icons/Icons";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
  return (
    <>

 
      <Slider />

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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </>
  );
};

export default HomePage;
