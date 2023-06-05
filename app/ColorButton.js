import React, { useCallback } from "react";

const ColorButton = ({ color, onChange, isActive }) => {
  const onChangeHandler = useCallback(() => onChange(color), [color, onChange]);

  return (
    <button
      className={`w-10 h-10 rounded-full shadow-sm hover:border-4 hover:border-gray-200 ${
        isActive && "border-4 border-gray-100"
      }`}
      style={{ backgroundColor: color }}
      onClick={onChangeHandler}
    />
  );
};

export default ColorButton;
