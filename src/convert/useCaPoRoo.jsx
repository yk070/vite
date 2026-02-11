import useCtx from "../context/useCtx.jsx";
const useCaPoRoo = ({ pEl }) => {
  const ctx = useCtx();

  const caNou = pEl.prf.tg.split("*")[1];
  return { caNou };
};

export default useCaPoRoo;
