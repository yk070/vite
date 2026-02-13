import useCtx from "../context/useCtx.jsx";
import usePoAaRoo from "./usePoAaRoo.jsx";

const usePoAaBoo = ({ pAdjEl }) => {
  const cx = useCtx();
  const roo = usePoAaRoo({ pAdjEl });

  const isHd = cx.hdPoAaId === roo.id;

  return {
    isHd,
  };
};

export default usePoAaBoo;
