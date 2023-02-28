import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex border-b border-solid border-[#ccc]">
      <div className=" m-4 pb-4 ">
        <h3 className="mb-1 font-bold">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#b55c6b] text-lg">{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
