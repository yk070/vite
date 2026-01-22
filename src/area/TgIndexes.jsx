import useCtx from "../context/useCtx.jsx";
import TgIndex from "./TgIndex.jsx";
const TgIndexes = () => {
  const ctx = useCtx();
  return (
    <>
      {ctx.contextIndexes.map((contextIndex) => (
        <TgIndex key={contextIndex} contextIndex={contextIndex} />
      ))}
    </>
  );
};

export default TgIndexes;
