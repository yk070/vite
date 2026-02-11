import useCtx from "../context/useCtx.jsx";
import useCaPoElRoo from "./useCaPoElRoo.jsx";
const useCaPoElRun = ({ pBl }) => {
  const ctx = useCtx();
  const roo = useCaPoElRoo({ pBl });

  const hover = () => {
    ctx.setHdPoObj({
      id: roo.id,
      prfs: pBl.prfs,
    });
  };
  const leave = () => {
    ctx.setHdPoObj(null);
  };

  const click = () => {
    ctx.setCdPoObj({ adj: pBl.adj, prfs: pBl.prfs });
  };

  return { hover, leave, click };
};

export default useCaPoElRun;
