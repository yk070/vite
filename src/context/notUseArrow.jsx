import convPosition from "../convert/convPosition.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabel from "../convert/ConvLabel.jsx";

export const notUseArrow = (cx) => {
  const hdAnTgLabel = <ConvLabel adjNou={cx.hdAnTg} />;

  const [hdAdj, hdNou] = cx.hdAnTg?.split("*") ?? [];
  const { x: tailX, y: tailY } = convPosition(hdNou);
  const remoteHdAn = cx.usedPrfs?.find((o) => o.ac === cx.hdAnTg)?.tg;
  const isRemoteExist = !!remoteHdAn;
  const [remoteHdAdj, remoteHdNou] = remoteHdAn?.split("*") ?? [];
  const remoteHdNouLabel = nouLabelObj[remoteHdNou];

  const tgCapsLength = cx.tgCaps.length;
  const onsiteNumber = cx.tgCaps.indexOf(hdAdj);
  const remoteNumber = cx.tgCaps.indexOf(remoteHdAdj);
  const currTgCapsLength = cx.tgCaps.indexOf(cx.currCapTg);
  const isRemoteSame = hdAdj === remoteHdAdj;

  const getHeadPos = () => {
    if (isRemoteSame) {
      return convPosition(remoteHdNou);
    }
    return {
      x: ((remoteNumber + 0.5) * 100) / tgCapsLength,
      y: 108,
    };
  };

  const { x: headX, y: headY } = getHeadPos();

  return {
    headX,
    headY,
    onsiteNumber,
    remoteNumber,
    currTgCapsLength,
    tgCapsLength,
    isRemoteSame,
    isRemoteExist,
    remoteHdAdj,
    remoteHdNou,
    remoteHdNouLabel,
    remoteHdAn,
    hdAdj,
    hdNou,
    hdAnTgLabel,
    tailX,
    tailY,
  };
};

export default notUseArrow;
