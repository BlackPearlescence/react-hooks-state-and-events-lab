import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // eslint-disable-next-line
  const [cartItems, setItems] = useState(items);
  const [selectedCategory, setSelection] = useState("All");

  const itemsToDisplay = cartItems.filter((cartItem) => {
    if(selectedCategory === "All"){
      return true;
    } else {
      return cartItem.category === selectedCategory;
    }
  })
  function handleChange(e){
    setSelection(e.target.value);
    console.log(itemsToDisplay)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
