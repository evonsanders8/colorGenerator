import React from "react";
import ColorPick from "./ColorPick";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <ColorPick key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
