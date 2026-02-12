import useCtx from "../context/useCtx.jsx";
import useCaMoElRoo from "./useCaMoElRoo.jsx";
const useCaMoElRun = ({ pHa }) => {
  const ctx = useCtx();
  const roo = useCaMoElRoo({ pHa });

  const hover = () => {
    ctx.setHdMoObj({
      id: roo.id,
      prf: pHa.moPrf,
    });
  };
  const leave = () => {
    ctx.setHdMoObj(null);
  };

  const click = () => {
    ctx.setCdMoObj({ adj: pHa.caAdj, prf: pHa.moPrf });
  };

  return { hover, leave, click };
};

export default useCaMoElRun;
