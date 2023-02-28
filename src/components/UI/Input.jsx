import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex align-middle mb-2">
      <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="w-12 rounded-md border border-solid border-[#ccc] pl-2 text-inherit"
      />
    </div>
  );
});
export default Input;
