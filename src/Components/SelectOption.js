import React from "react";

const SelectOption = ({ className, children, optionName }) => {
  return (
    <select className={className}>
      {children}
      <option className={className}>{optionName}</option>
    </select>
  );
};

export default SelectOption;
