import look from "../style/look.jsx";
import MultiCircle from "./MultiCircle.jsx";
import easyObj from "../obj/easyObj.js";
// const pEle = { adj: pBlock.adj, adjObj };
const CapableCircle = ({ pEle }) => {
  const capableNou = pEle.adjObj.tg.split("*")[1];
  const getLevel = () => {
    const entry = Object.entries(easyObj[pEle.adj])?.find(([_, nous]) =>
      nous?.includes(capableNou),
    );
    return entry?.[0] ?? "third";
  };
  const level = getLevel();

  return (
    <div style={look.capable18}>
      <MultiCircle level={level} circleColor={pEle.color} />
    </div>
  );
};

export default CapableCircle;
