const Cart = (props) => {
  const cartItems = (
    <ul className="overflow-auto list-none m-0 p-0 max-h-[20rem]">
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className="flex justify-between align-middle font-bold text-[1.5rem] my-4">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="text-right">
        <button className="cursor-pointer bg-transparent border border-solid text-[#b55c6b] border-[#b55c6b] py-2 px-8 rounded-3xl ml-4 hover:bg-[#b55c6b] hover:text-white active:text-white active:bg-[#b55c6b]">
          Close
        </button>
        <button className="cursor-pointer bg-transparent border border-solid text-[#b55c6b] border-[#b55c6b] py-2 px-8 rounded-3xl ml-4 hover:bg-[#b55c6b] hover:text-white active:text-white active:bg-[#b55c6b]">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
