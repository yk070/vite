import useCtx from "../context/useCtx.jsx";
const usePoAaRoo = ({ pAdjEl }) => {
  const ctx = useCtx();

  const id = `${pAdjEl.caAdj}${pAdjEl.iAdj}${pAdjEl.iEl}`;

  const filteredPrfs = pAdjEl.prfs.filter(
    (prf) => JSON.stringify(prf) !== JSON.stringify(pAdjEl.moPrf),
  );

  return { id, filteredPrfs };
};

export default usePoAaRoo;
