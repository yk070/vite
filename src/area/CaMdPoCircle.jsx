import look from "../style/look.jsx";
import useCaPoBoo from "../convert/useCaPoBoo.jsx";
import useCaPoRoo from "../convert/useCaPoRoo.jsx";

// const pPoCo = {  caAdj, moPrf, prf };
const CaMdPoCircle = ({ pPoCo }) => {
  const roo = useCaPoRoo({ pPoCo });
  const boo = useCaPoBoo({ pPoCo });

  return (
    <div style={look.caMoEle4}>
      <div style={{ ...look.common3, ...boo.circle }} />
    </div>
  );
};

export default CaMdPoCircle;
