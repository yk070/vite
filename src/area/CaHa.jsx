import CaEl from "./CaEl.jsx";

// const pBl = { caAdj, isMo, po2Prfss};
const CaHa = ({ pBl, isMo }) => {
  return (
    <>
      {pBl.moPrfs.map((moPrf, i) => {
        const pHa = {
          caAdj: pBl.caAdj,
          po3Prfsss: pBl.po3Prfsss,
          moPrf,
          i,
          isMo,
        };
        return <CaEl key={i} pHa={pHa} />;
      })}
    </>
  );
};

export default CaHa;
