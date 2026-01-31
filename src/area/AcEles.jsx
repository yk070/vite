import useCtx from "../context/useCtx.jsx";
import Basic from "./Basic.jsx";
import { adjPosiIdObjObj } from "../obj/namedObj.js";
import AcEle from "./AcEle.jsx";
import CapableEles from "./CapableEles.jsx";
const AcEles = () => {
  const ctx = useCtx();
  if (ctx.isWoAcBasic) return <Basic />;
  if (ctx.isWoCapable) return <CapableEles />;
  if (ctx.isWoAcDefault)
    return (
      <>
        {Object.entries(adjPosiIdObjObj[ctx.currentCapAc]).map(
          ([posiId, styleObj]) => (
            <AcEle key={posiId} posiId={posiId} styleObj={styleObj} />
          ),
        )}
      </>
    );
};

export default AcEles;
