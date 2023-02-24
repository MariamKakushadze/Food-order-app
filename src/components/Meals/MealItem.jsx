const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className=" m-4 pb-4 border-b border-solid border-[#ccc]">
        <h3 className="mb-1 font-bold">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-lg">{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
