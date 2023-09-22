import React from "react";
import { toast } from "react-toastify";

const ColorPick = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipbpard");
      } catch (error) {
        toast.error("Clipboard not available");
      }
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">#{hex}</p>
    </article>
  );
};

export default ColorPick;
