import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to manage item cart status
  const [inCart, setInCart] = useState(false);

  // Toggle function
  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

