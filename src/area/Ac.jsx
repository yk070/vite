import look from "../style/look.jsx";
import AcEles from "./AcEles.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import { acCaps } from "../array/namedArray.js";
import AcCap from "./AcCap.jsx";
const Ac = () => {
  return (
    <>
      <div style={look.ac2}>
        {acCaps.map((acCap) => (
          <AcCap key={acCap} acCap={acCap} />
        ))}
      </div>
      <div style={look.ac3}>
        <AlphaNumBlock derive="ac" />
        <AcEles />
      </div>
    </>
  );
};

export default Ac;
