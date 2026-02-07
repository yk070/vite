import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import capableObj from "../obj/capableObj.js";
import CapableBlock from "./CapableBlock.jsx";
const Capable = () => {
  const ctx = useCtx();
  const prfsss = capableObj[ctx.cdAcAdjNou];

  const click = () => {
    ctx.setCdAcAdjNou(null);
  };
  if (!ctx.isWoAcSd) return null;
  return (
    <div style={look.ac6}>
      <div style={look.ac8} onClick={click}></div>
      <div style={look.ac7}>
        <div style={look.capable13}>
          <span style={look.capable27}> {ctx.cdAcAdjNou}</span>
        </div>
        <div style={look.capable12}>
          {/* single */}
          <div style={look.capable23}>
            <div style={look.capable26}>
              <div style={look.capable25}>
                <span style={look.capable28}>{"単体"}</span>
              </div>
              <div style={look.capable20}>
                {prfsss.map((prfss) => {
                  const adj = prfss?.[0]?.[0]?.tg?.split("*")[0];
                  const pHead = { adj, prfss };
                  return <CapableBlock key={adj} pHead={pHead} />;
                })}
              </div>
            </div>
          </div>
          {/* multiple */}
          <div style={look.capable24}>
            <div style={look.capable26}>
              <div style={look.capable25}>
                <span style={look.capable28}>{"複数"}</span>
              </div>
              <div style={look.capable20}>
                {/* {prfsss.map((prfss) => {
                  const adj = prfss?.[0]?.[0]?.tg?.split("*")[0];
                  const pHead = { adj, prfss };
                  return <CapableBlock key={adj} pHead={pHead} />;
                })} */}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Capable;
