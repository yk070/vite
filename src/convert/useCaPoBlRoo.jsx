import useCtx from "../context/useCtx.jsx";
const useCaPoBlRoo = ({ pAaa }) => {
  const ctx = useCtx();

  const filteredPrfss = pAaa.matchedPrfss.filter(
    (group) => group[0].tg.split("*")[0] === pAaa.adj,
  );
  const length = filteredPrfss.length;
  return { length, filteredPrfss };
};

export default useCaPoBlRoo;
