import useCtx from "../context/useCtx.jsx";
import useCaPoBlRoo from "./useCaPoBlRoo.jsx";

const useCaPoBlBoo = ({ pEl }) => {
  const ctx = useCtx();
  const roo = useCaPoBlRoo({ pEl });

  const isHd = ctx.hdPoBlId === roo.id;

  return {
    isHd,
  };
};

export default useCaPoBlBoo;
