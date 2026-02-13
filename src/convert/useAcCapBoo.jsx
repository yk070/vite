import useCtx from "../context/useCtx.jsx";

const useAcCapBoo = ({ acCap }) => {
  const cx = useCtx();

  const isActive = acCap === cx.currCapAc;

  return { isActive };
};

export default useAcCapBoo;
