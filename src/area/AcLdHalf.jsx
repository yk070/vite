import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import acLdObj from "../obj/acLdObj.js";
import AcLdEle from "./AcLdEle.jsx";
const AcLdHalf = ({ props }) => {
  const ctx = useCtx();
  const currentAcLdObj = acLdObj[ctx.currentCapAc][props];

  return (
    <div style={look.Often1}>
      {Object.entries(currentAcLdObj).map(([title, titleObj]) => (
        <div key={title} style={look.acLd1}>
          <div style={look.acLd11}>
            <div style={look.acLd5}>{title}</div>
            <div style={look.acLd10}>
              <div style={look.acLd13}>
                {Object.entries(titleObj).map(([adj, adjObjs]) => {
                  const foo = adjObjs.length;
                  return (
                    <div style={look.acLd8(foo)}>
                      <div style={look.acLd12}>
                        {adjObjs.map((adjObj, i) => (
                          <div key={adj} style={look.acLd9}>
                            <div key={i} style={look.acLd7}>
                              {adj}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcLdHalf;
