import React from "react";

const Item = ({ itemName, className }) => {
  return <li className={className}>{itemName}</li>;
};

export default Item;
