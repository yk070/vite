import useCtx from "../context/useCtx.jsx";

const useAcCapBoo = ({ acCap }) => {
  const cx = useCtx();

  const click = () => cx.setCurrCapAc(acCap);

  return { click };
};

export default useAcCapBoo;
