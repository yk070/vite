import look from "../style/look.jsx";
import CapableHalf from "./CapableHalf.jsx";
const Capable = () => {
  return (
    <div style={look.basic7}>
      <div style={look.basic8}>
        <CapableHalf props="left" />
      </div>
      <div style={look.basic8}>
        <CapableHalf props="right" />
      </div>
    </div>
  );
};

export default Capable;
