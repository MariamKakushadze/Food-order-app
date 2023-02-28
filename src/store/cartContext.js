import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addIrem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
