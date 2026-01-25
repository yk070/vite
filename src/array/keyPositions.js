import posiIdObj from "../obj/posiIdObj.js";
const keyPositions = Object.entries(posiIdObj).map(([key, styleObj]) => {
  const left = parseFloat(styleObj?.left ?? "0");
  const top = parseFloat(styleObj?.top ?? "0");
  const width = parseFloat(styleObj?.width ?? "0");
  const height = parseFloat(styleObj?.height ?? "0");
  return {
    key,
    headX: left + width / 2,
    headY: top + height / 2,
  };
});
export default keyPositions;
