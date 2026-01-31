import look from "../style/look.jsx";
import CapableEle from "./CapableEle.jsx";
import useCapableBlockBoo from "../convert/useCapableBlockBoo.jsx";
import useCapableBlockCol from "../convert/useCapableBlockCol.jsx";
import useCapableBlockRun from "../convert/useCapableBlockRun.jsx";
import useCapableBlockRoo from "../convert/useCapableBlockRoo.jsx";

const CapableBlock = ({ props }) => {
  const roo = useCapableBlockRoo({ props });
  const boo = useCapableBlockBoo({ props });
  const col = useCapableBlockCol({ props });
  const run = useCapableBlockRun({ props });

  return (
    <div
      style={look.capable8(props.adjObjs.length, col)}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable12}>
        <div style={look.capable15}>
          {props.adjObjs.map((adjObj, i) => {
            const id = `${props.title}${props.adj}${i}`;
            const props2 = { adj: props.adj, id, adjObj, i };
            return <CapableEle key={id} props2={props2} />;
          })}
        </div>
        <div style={look.capable16}>
          <span style={look.capable17}>{props.adj}</span>
        </div>
      </div>
    </div>
  );
};

export default CapableBlock;
