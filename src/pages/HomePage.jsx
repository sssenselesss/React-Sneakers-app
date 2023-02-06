import { useState } from "react";

import { SearchItemicon } from "../components/Icons/Icons";
import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";
import PRODUCTS from "../data/PRODUCTS.JS";

const HomePage = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [query, setQuery] = useState("");

 
  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
   const filteredProducts = products.filter((item) =>item.name.toLowerCase().includes(query) )
  console.log(filteredProducts)
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
            <input
              type="text"
              placeholder="Поиск..."
              onChange={(e) => onChangeQuery(e)}
              value={query}
            />
          </div>
        </header>

        <div className="products">
          {
            filteredProducts.length ? 
            (
              filteredProducts.map((prod) => {
                if (prod.name.toLowerCase().includes(query)) {
                  return <Product product={prod} key={prod.id} />;
                }
              })
            ):
            <h2 className="empty">По вашему запросу {query} ничего не найдено</h2>
         
          }
        </div>
      </section>
    </>
  );
};

export default HomePage;
