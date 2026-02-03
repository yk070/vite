import useCtx from "../context/useCtx.jsx";

const useAcCapBoo = ({ acCap }) => {
  const ctx = useCtx();

  const isActive = acCap === ctx.currCapAc;

  return { isActive };
};

export default useAcCapBoo;
