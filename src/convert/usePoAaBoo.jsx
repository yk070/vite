import useCtx from "../context/useCtx.jsx";
import usePoAaRoo from "./usePoAaRoo.jsx";

const usePoAaBoo = ({ pAdjEl }) => {
  const ctx = useCtx();
  const roo = usePoAaRoo({ pAdjEl });

  const isHd = ctx.hdPoAaId === roo.id;

  return {
    isHd,
  };
};

export default usePoAaBoo;
