import keyObjs from "./keyObjs.js";
const keyPositions = keyObjs.map((KeyObj) => {
  const style = KeyObj.style;
  const key = KeyObj.key;

  const left = parseFloat(style?.left ?? "0");
  const top = parseFloat(style?.top ?? "0");
  const width = parseFloat(style?.width ?? "0");
  const height = parseFloat(style?.height ?? "0");
  return {
    key,
    headX: left + width / 2,
    headY: top + height / 2,
  };
});

export { keyPositions };
