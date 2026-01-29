import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import acLdObj from "../obj/acLdObj.js";
import AcLdEle from "./AcLdEle.jsx";
const AcLdHalf = ({ props }) => {
  const ctx = useCtx();
  const currentAcLdObj = acLdObj[ctx.currentCapAc][props];
  const hover = () => {
    ctx.setIsAcLd(true);
  };
  const leave = () => {
    ctx.setIsAcLd(false);
  };

  return (
    <div style={look.Often1}>
      {Object.entries(currentAcLdObj).map(([title, titleObj]) => (
        <div key={title} style={look.acLd1}>
          <div style={look.acLd11} onMouseEnter={hover} onMouseLeave={leave}>
            <div style={look.acLd5}>{title}</div>
            <div style={look.acLd10}>
              {Object.entries(titleObj).map(([adj, adjObjs]) => {
                const adjObjsLength = adjObjs.length;
                const hover2 = () => {
                  ctx.setAcLdAdj(adj);
                };
                const leave2 = () => {
                  ctx.setAcLdAdj(null);
                };
                return (
                  <div
                    key={adj}
                    style={look.acLd8(adjObjsLength)}
                    onMouseEnter={hover2}
                    onMouseLeave={leave2}
                  >
                    <div style={look.acLd12}>
                      <div style={look.acLd15}>
                        {adjObjs.map((adjObj, i) => {
                          const uniqueKey = `${title}${adj}${i}`;
                          const props = { uniqueKey, title, adj, adjObj, i };
                          return <AcLdEle key={uniqueKey} props={props} />;
                        })}
                      </div>
                      <div style={look.acLd16}>
                        <span style={look.acLd17}>{adj}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcLdHalf;
