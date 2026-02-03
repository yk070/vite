import useCtx from "../context/useCtx.jsx";

const useAcCapBoo = ({ acCap }) => {
  const ctx = useCtx();

  const click = () => ctx.setCurrCapAc(acCap);

  return { click };
};

export default useAcCapBoo;
