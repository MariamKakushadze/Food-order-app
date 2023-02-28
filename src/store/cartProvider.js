import CartContext from "./cartContext";

const CartProvider = (props) => {
  const addToCartHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
