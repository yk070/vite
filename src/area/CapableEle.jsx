import look from "../style/look.jsx";
import useCapableCol from "../convert/useCapableCol.jsx";
import useCapableRun from "../convert/useCapableRun.jsx";
import useCapableBoo from "../convert/useCapableBoo.jsx";
import easyObj from "../obj/easyObj.js";

// const pBlock = { adj: pHead.adj, prf, i };
const CapableEle = ({ pBlock }) => {
  const boo = useCapableBoo({ pBlock });
  const col = useCapableCol({ pBlock });
  const run = useCapableRun({ pBlock });

  return (
    <div
      style={look.capable9(col)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable7(col.buttonColor)}>
        {pBlock.prfs.map((adjObj, i) => {
          const capableNou = adjObj.tg.split("*")[1];
          const getCircle = () => {
            const entry = Object.entries(easyObj[pBlock.adj])?.find(
              ([_, nous]) => nous?.includes(capableNou),
            );
            const level = entry?.[0] ?? "third";
            if (level === "first") return look.first;
            if (level === "second") return look.second;
            if (level === "third") return look.third;
          };
          const circle = getCircle();
          return (
            <div style={look.capable18} key={i}>
              <div style={{ ...look.common2, ...circle }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CapableEle;
