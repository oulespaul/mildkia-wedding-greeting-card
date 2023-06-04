import React from "react";

const ColorButton = ({ color, onChange, isActive }) => {
  const onChangeHandler = () => onChange(color);

  return (
    <button
      className={`w-10 h-10 rounded-full shadow-sm bg-[${color}] hover:border-4 hover:border-gray-200 ${
        isActive && "border-4 border-gray-100"
      }`}
      onClick={onChangeHandler}
    />
  );
};

export default ColorButton;
