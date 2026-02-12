import useCtx from "../context/useCtx.jsx";
const useCaPoRoo = ({ pPoCo }) => {
  const ctx = useCtx();

  const caNou = pPoCo.prf.tg.split("*")[1];
  return { caNou };
};

export default useCaPoRoo;
