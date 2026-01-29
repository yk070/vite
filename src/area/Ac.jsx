import look from "../style/look.jsx";
import AlphaNumBlock from "./AlphaNumBlock.jsx";
import { acCaps } from "../array/namedArray.js";
import AcCap from "./AcCap.jsx";
import useCtx from "../context/useCtx.jsx";
import Basic from "./Basic.jsx";
import { adjPosiIdObjObj } from "../obj/namedObj.js";
import AcEle from "./AcEle.jsx";
import AcLdEles from "./AcLdEles.jsx";

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
        {ctx.isWoAcBasic && <Basic />}
        {ctx.isWoAcLd && <AcLdEles />}
        {ctx.isWoAcDefault &&
          Object.entries(adjPosiIdObjObj[ctx.currentCapAc]).map(
            ([posiId, styleObj]) => (
              <AcEle key={posiId} posiId={posiId} styleObj={styleObj} />
            ),
          )}
      </div>
    </>
  );
};

export default Ac;
