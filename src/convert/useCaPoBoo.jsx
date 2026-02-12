import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";
import useCaPoRoo from "./useCaPoRoo.jsx";
import easyObj from "../obj/easyObj.js";

const useCaPoBoo = ({ pPoCo }) => {
  const ctx = useCtx();
  const roo = useCaPoRoo({ pPoCo });

  const isTarget = JSON.stringify(pPoCo.moPrf) === JSON.stringify(pPoCo.prf);
  const color = isTarget ? "white" : "gray";
  const getCircle = () => {
    const entry = Object.entries(easyObj[pPoCo.caAdj])?.find(([_, nous]) =>
      nous?.includes(roo.caNou),
    );
    const level = entry?.[0] ?? "third";
    if (level === "first") return look.first(color);
    if (level === "second") return look.second(color);
    if (level === "third") return look.third(color);
  };
  const circle = getCircle();

  return { circle, isTarget };
};

export default useCaPoBoo;
