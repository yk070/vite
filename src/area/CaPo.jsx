import look from "../style/look.jsx";
import useCaPoBoo from "../convert/useCaPoBoo.jsx";
import useCaPoRoo from "../convert/useCaPoRoo.jsx";

// const pEl = {  prf, caAdj, moPrf };
const CaPo = ({ pEl }) => {
  const roo = useCaPoRoo({ pEl });
  const boo = useCaPoBoo({ pEl });

  return (
    <div style={look.caMoEle4}>
      <div style={{ ...look.common3, ...boo.circle }} />
    </div>
  );
};

export default CaPo;
