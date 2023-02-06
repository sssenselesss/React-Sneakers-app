import FormatMoney from "../../utils/FormatMoney";
import { HeartItemIcon, PlusItemIcon } from "../Icons/Icons";



const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__action">
        <HeartItemIcon />
      </div>

      <img src={product.preview} alt="" />

      <h3>{product.name}</h3>
      <div className="product__footer">
        <div className="price">
          <span className="gray">Цена:</span>
          <span className="value">{FormatMoney(product.price)}</span>
        </div>
        <button>
          <PlusItemIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default Product;
