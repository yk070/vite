import useCtx from "../context/useCtx.jsx";
const useMultiBooConvert = ({ title, objs }) => {
  const ctx = useCtx();

  const isHd = title === ctx.hdMultiObj?.title;
  const isSelected = objs.every((obj) =>
    ctx.acTgSet.has(`${obj.ac}|${obj.tg}`)
  );

  return { isHd, isSelected };
};

export default useMultiBooConvert;
