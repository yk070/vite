import Line from "./Line.jsx";
import keyPositions from "../array/keyPositions.js";
import { alphabetNumberNous } from "../array/namedNous.js";

const TgLines = ({ containerRef }) => {
  return (
    <>
      {keyPositions.map(({ key, headX, headY }, index) => {
        if (alphabetNumberNous.includes(key)) return null;
        return (
          <Line
            key={index}
            containerRef={containerRef}
            headX={headX}
            headY={headY}
          />
        );
      })}
    </>
  );
};

export default TgLines;
