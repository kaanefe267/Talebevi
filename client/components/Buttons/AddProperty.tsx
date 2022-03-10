import React, { FC } from "react";
import Props from "../../interfaces/ButtonInterface";

const AddProperty: React.FC<Props> = ({ message }) => (
  <button className="property-button">
    <span className="property-button__plus">plus</span>
    {message}
  </button>
);

export default AddProperty;