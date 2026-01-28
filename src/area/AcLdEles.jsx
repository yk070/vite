import look from "../style/look.jsx";
import AcLdHalf from "./AcLdHalf.jsx";
const AcLdEles = () => {
  return (
    <div style={look.basic7}>
      <div style={look.basic8}>
        <AcLdHalf props="left" />
      </div>
      <div style={look.basic8}>
        <AcLdHalf props="right" />
      </div>
    </div>
  );
};

export default AcLdEles;
