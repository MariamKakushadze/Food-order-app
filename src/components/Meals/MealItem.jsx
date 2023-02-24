import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex border-b border-solid border-[#ccc]">
      <div className=" m-4 pb-4 ">
        <h3 className="mb-1 font-bold">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#b55c6b] text-lg">{price}</div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
