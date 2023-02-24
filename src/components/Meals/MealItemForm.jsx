import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className=" mr-4 pt-8">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-[#b55c6b] text-white rounded-2xl px-8 py-1 font-bold text-center m-auto hover:bg-[#fca5a5] active:bg-[#fca5a5]">
        Add
      </button>
    </form>
  );
};

export default MealItemForm;
