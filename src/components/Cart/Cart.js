import { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="overflow-auto list-none m-0 p-0 max-h-[20rem]">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between align-middle font-bold text-[1.5rem] my-4">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          className="cursor-pointer bg-transparent border border-solid text-[#b55c6b] border-[#b55c6b] py-2 px-8 rounded-3xl ml-4 hover:bg-[#b55c6b] hover:text-white active:text-white active:bg-[#b55c6b]"
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button className="cursor-pointer bg-transparent border border-solid text-[#b55c6b] border-[#b55c6b] py-2 px-8 rounded-3xl ml-4 hover:bg-[#b55c6b] hover:text-white active:text-white active:bg-[#b55c6b]">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
