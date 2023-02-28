const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between align-middle border-b-[2px] border-solid border-[#b55c6b]">
      <div className="m-0">
        <h2 className="text-[#363636] mb-2">{props.name}</h2>
        <div className="w-[10rem] flex justify-between align-middle items-center mb-1">
          <span className="text-[#b55c6b] font-bold">{price}</span>
          <span className="font-bold border border-solid border-[#ccc] py-1 px-2 rounded-[6px] ">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col m-0 md:flex-row">
        <button
          className="font-bold text-[#b55c6b] border border-solid border-[#b55c6b] h-8 px-3 text-center rounded-md bg-transparent cursor-pointer ml-4 m-auto"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-bold text-[#b55c6b] border border-solid border-[#b55c6b] h-8 px-3 text-center rounded-md bg-transparent cursor-pointer ml-4 m-auto"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
