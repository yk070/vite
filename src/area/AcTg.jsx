import look from "../style/look.jsx";
import Ac from "./Ac.jsx";
import Tg from "./Tg.jsx";
import useCtx from "../context/useCtx.jsx";

const AcTg = () => {
  const ctx = useCtx();
  const getBgColor = () => {
    if (ctx.isWoTgNone) return "#7A7A7A";
    if (ctx.isWoTgVirtual) return "#7C7A92";
    return "#7B9884";
  };
  const bgColor = getBgColor();
  return (
    <>
      <div style={look.Body7}>
        <div style={look.Body3}>
          <Ac />
        </div>
      </div>
      <div style={look.Body4(bgColor)}>
        <div style={look.Body5}>
          <Tg />
        </div>
      </div>
    </>
  );
};

export default AcTg;
