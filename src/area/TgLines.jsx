import Line from "./Line.jsx";
import keyPositions from "../array/keyPositions.js";
import { alphabetNumberKeys } from "../array/namedKeys.js";

const TgLines = ({ containerRef }) => {
  return (
    <>
      {keyPositions.map(({ key, headX, headY }, index) => {
        if (alphabetNumberKeys.includes(key)) return null;
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
