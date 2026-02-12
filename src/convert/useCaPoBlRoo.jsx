import useCtx from "../context/useCtx.jsx";
const useCaPoBlRoo = ({ pEl }) => {
  const ctx = useCtx();

  const id = `${pEl.caAdj}${pEl.iHa}${pEl.iEl}`;

  const filteredPrfs = pEl.prfs.filter(
    (prf) => JSON.stringify(prf) !== JSON.stringify(pEl.moPrf),
  );

  return { id, filteredPrfs };
};

export default useCaPoBlRoo;
