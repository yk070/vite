import Line from "./Line.jsx";
import { keyPositions } from "../array/namedArray.js";
import { AlphabetNumberKeys } from "../array/namedKeys.js";

const TgLines = ({ containerRef }) => {
  return (
    <>
      {keyPositions.map(({ key, headX, headY }, index) => {
        if (AlphabetNumberKeys.includes(key)) return null;
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
