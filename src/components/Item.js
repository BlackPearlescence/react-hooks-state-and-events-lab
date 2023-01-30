import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setIsInCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const cartClass = inCart ? "in-cart" : "";
  const addClass = isAdded ? "remove" : "add";
  function handleClick(e){
    setIsInCart((inCart) => !inCart);
    setIsAdded((isAdded) => !isAdded)
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addClass} onClick={handleClick}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
