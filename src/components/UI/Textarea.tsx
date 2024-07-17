import React from "react";

const Textarea = ({
  name,
  placeholder,
  onChangeHandler,
  value,
}: {
  name: string;
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
      cols={5}
      rows={5}
      value={value}
      className="py-2 px-5 outline-none border-b border-black"
    />
  );
};

export default Textarea;
