import keyObjs from "./keyObjs.jsx";
const keyPositions = keyObjs.map((KeyObj) => {
  const style = KeyObj.style;

  const left = parseFloat(style?.left ?? "0");
  const top = parseFloat(style?.top ?? "0");
  const width = parseFloat(style?.width ?? "0");
  const height = parseFloat(style?.height ?? "0");
  return {
    headX: left + width / 2,
    headY: top + height / 2,
  };
});

export { keyPositions };
