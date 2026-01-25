import posiIdObj from "../obj/posiIdObj.js";
const convPosition = (hoveredNou) => {
  const revisedhoveredNou = hoveredNou === "enter" ? "enter_above" : hoveredNou;
  const style = posiIdObj[revisedhoveredNou];

  const left = parseFloat(style?.left ?? "0");
  const top = parseFloat(style?.top ?? "0");
  const width = parseFloat(style?.width ?? "0");
  const height = parseFloat(style?.height ?? "0");

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};

export default convPosition;
