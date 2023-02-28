import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <Cart onClose={closeCartHandler} />}
      <Header openCartHandler={openCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
