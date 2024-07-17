import React from "react";

const Input = ({
  type,
  name,
  placeholder,
  onChangeHandler,
  value,
}: {
  type: string;
  name: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
      className="border-b border-purple-300 w-full p-2 outline-1 outline-purple-300 text-purple-800"
    />
  );
};

export default Input;
