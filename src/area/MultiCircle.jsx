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

  return (
    <div>
      <MultiCircleDiv
        {...config}
        base={base}
        size={60}
        circleColor={circleColor}
      />
    </div>
  );
};

export default MultiCircle;
