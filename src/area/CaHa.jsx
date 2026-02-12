import CaMdLeader from "./CaMdLeader.jsx";

// const pBl = { caAdj, moPrfs, po3Prfsss };
const CaHa = ({ pBl, isMo }) => {
  return (
    <>
      {pBl.moPrfs.map((moPrf, iHa) => {
        const pHa = {
          caAdj: pBl.caAdj,
          po3Prfsss: pBl.po3Prfsss,
          isMo,
          moPrf,
          iHa,
        };
        return <CaMdLeader key={iHa} pHa={pHa} />;
      })}
    </>
  );
};

export default CaHa;
