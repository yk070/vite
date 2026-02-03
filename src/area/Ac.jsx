import look from "../style/look.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import { acCaps } from "../array/namedArray.js";
import AcCap from "./AcCap.jsx";
import useCtx from "../context/useCtx.jsx";
import Basic from "./Basic.jsx";
import { adjPosiIdObjObj } from "../obj/namedObj.js";
import AcEle from "./AcEle.jsx";
import Capable from "./Capable.jsx";
import Capable2 from "./Capable2.jsx";

const Ac = () => {
  const ctx = useCtx();
  return (
    <>
      <div style={look.ac2}>
        {acCaps.map((acCap) => (
          <AcCap key={acCap} acCap={acCap} />
        ))}
      </div>
      <div style={look.ac3}>
        <AlphaNumBlock derive="ac" />
        {ctx.isWoUsable && <Basic />}
        {ctx.isWoCapable && <Capable />}
        {ctx.isWoFlexible &&
          Object.entries(adjPosiIdObjObj[ctx.currCapAc]).map(
            ([posiId, styleObj]) => (
              <AcEle key={posiId} posiId={posiId} styleObj={styleObj} />
            ),
          )}
      </div>
      <Capable2 />
    </>
  );
};

export default Ac;
