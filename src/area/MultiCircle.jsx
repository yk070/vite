import MultiCircleDiv from "./MultiCircleDiv.jsx";
import { levelConfig } from "../obj/namedObj.js";

const MultiCircle = ({ level, circleColor }) => {
  const header = 100;
  const sidebar = 200;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const base = Math.min((vh - header) * (16 / 9), vw - sidebar) / 4000;

  const config = levelConfig[level];
  if (!config) return null;

  const topValue = base * config.topMultiplier;
  const rightValue = base * config.rightMultiplier;

  return (
    <span
      style={{
        position: "absolute",
        top: topValue,
        right: rightValue,
        height: "100%",
        width: "100%",
      }}
    >
      <MultiCircleDiv
        {...config}
        base={base}
        size={60}
        circleColor={circleColor}
      />
    </span>
  );
};

export default MultiCircle;
