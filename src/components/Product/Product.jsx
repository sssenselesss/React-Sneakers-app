import { HeartItemIcon, PlusItemIcon } from "../Icons/Icons";
import prodImg from './../../assets/prodImg.png'


const Product = ({product}) =>{
    return (
<div className="product">
<div className="product__action">
  <HeartItemIcon />
</div>

<img src={prodImg} alt="" />

<h3>Мужские Кроссовки Under Armour Curry 8</h3>
<div className="product__footer">
  <div className="price">
    <span className="gray">Цена:</span>
    <span className="value">12 999 руб.</span>
  </div>
  <button><PlusItemIcon  size={20
  }/></button>
</div>
</div>
    )
}

export default Product