import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";
import useCaPoRoo from "./useCaPoRoo.jsx";
import easyObj from "../obj/easyObj.js";

const useCaPoBoo = ({ pEl }) => {
  const ctx = useCtx();
  const roo = useCaPoRoo({ pEl });

  const isTarget = pEl.moPrf === pEl.prf;

  const getCircle = () => {
    const entry = Object.entries(easyObj[pEl.caAdj])?.find(([_, nous]) =>
      nous?.includes(roo.caNou),
    );
    const level = entry?.[0] ?? "third";
    if (level === "first") return look.first;
    if (level === "second") return look.second;
    if (level === "third") return look.third;
  };
  const circle = getCircle();

  return { circle, isTarget };
};

export default useCaPoBoo;
