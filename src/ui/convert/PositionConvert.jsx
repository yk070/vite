import keyObjs from "../array/keyObjs.jsx";
const PositionConvert = (HoveredKey) => {
  const keyToFind = HoveredKey === "enter" ? "enter_above" : HoveredKey;
  const style = keyObjs.find((KeyObj) => KeyObj.key === keyToFind)?.style;

  const left = parseFloat(style?.left ?? "0");
  const top = parseFloat(style?.top ?? "0");
  const width = parseFloat(style?.width ?? "0");
  const height = parseFloat(style?.height ?? "0");

  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};

export default PositionConvert;
