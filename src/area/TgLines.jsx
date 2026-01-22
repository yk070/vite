import Line from "./Line.jsx";
import { keyPositions } from "../array/namedArray.jsx";

const TgLines = ({ containerRef }) => {
  return (
    <>
      {keyPositions.map(({ headX, headY }, index) => (
        <Line
          key={index}
          containerRef={containerRef}
          headX={headX}
          headY={headY}
        />
      ))}
    </>
  );
};

export default TgLines;
