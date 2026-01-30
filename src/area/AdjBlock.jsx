import look from "../style/look.jsx";
import useCtx from "../context/useCtx.jsx";
import AcLdEle from "./AcLdEle.jsx";

const AdjBlock = ({ props }) => {
  const ctx = useCtx();
  const adjObjsLength = props.adjObjs.length;

  // const boo = useTgAdjLdBoo({ props });
  // const col = useTgAdjLdCol({ boo });
  // const run = useTgAdjLdRun({ props });

  const hover = () => {
    ctx.setAcLdAdj(props.adj);
  };

  const leave = () => {
    ctx.setAcLdAdj(null);
  };

  return (
    <div
      style={look.acLd8(adjObjsLength)}
      onMouseEnter={hover}
      onMouseLeave={leave}
    >
      <div style={look.acLd12}>
        <div style={look.acLd15}>
          {props.adjObjs.map((adjObj, i) => {
            const uniqueKey = `${props.title}${props.adj}${i}`;
            const props2 = {
              uniqueKey,
              ...props,
              adjObj,
              i,
            };
            return <AcLdEle key={uniqueKey} props2={props2} />;
          })}
        </div>
        <div style={look.acLd16}>
          <span style={look.acLd17}>{props.adj}</span>
        </div>
      </div>
    </div>
  );
};

export default AdjBlock;
