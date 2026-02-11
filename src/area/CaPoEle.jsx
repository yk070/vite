import look from "../style/look.jsx";
import useCaPoElCol from "../convert/useCaPoElCol.jsx";
import useCaPoElRun from "../convert/useCaPoElRun.jsx";
import useCaPoElBoo from "../convert/useCaPoElBoo.jsx";
import easyObj from "../obj/easyObj.js";

// const pBl = { adj: pAaa.adj, prfs, i };
const CaPoEle = ({ pBl }) => {
  const boo = useCaPoElBoo({ pBl });
  const col = useCaPoElCol({ pBl });
  const run = useCaPoElRun({ pBl });

  return (
    <div
      style={look.capable9(col.borderColor)}
      onClick={run.click}
      onMouseEnter={run.hover}
      onMouseLeave={run.leave}
    >
      <div style={look.capable7(col.buttonColor)}>
        {pBl.prfs.map((prf, i) => {
          const pEl = { prf };

          const capableNou = prf?.tg.split("*")[1];
          // console.log(capableNou);

          const getCircle = () => {
            const entry = Object.entries(easyObj[pBl.adj])?.find(([_, nous]) =>
              nous?.includes(capableNou),
            );
            const level = entry?.[0] ?? "third";
            if (level === "first") return look.first;
            if (level === "second") return look.second;
            if (level === "third") return look.third;
          };

          const circle = getCircle();
          return (
            <div
              key={i}
              style={look.poEle1}
              // pEl={pEl}
            >
              <div style={{ ...look.common3, ...circle }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaPoEle;
